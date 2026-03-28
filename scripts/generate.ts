/**
 * Generates oxlint config files from popular ESLint styleguides.
 *
 * For each source eslint config, this script:
 * 1. Recursively resolves all `extends` chains to collect the full set of rules
 * 2. Passes the flat rule set through @oxlint/migrate to produce an oxlint-compatible config
 * 3. Writes the result as a JSON file under the appropriate output directory
 *
 * Run with: pnpm generate
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import migrate from '@oxlint/migrate';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const configsDir = join(rootDir, 'configs');

// Use createRequire so we can require() CJS ESLint configs from ESM context
const req = createRequire(join(rootDir, 'package.json'));

type EslintRuleValue = string | number | [string | number, ...unknown[]];
type EslintRules = Record<string, EslintRuleValue>;

interface OldStyleEslintConfig {
  extends?: string | string[];
  plugins?: string[];
  rules?: EslintRules;
  env?: Record<string, boolean>;
  settings?: Record<string, unknown>;
  parserOptions?: Record<string, unknown>;
  overrides?: OldStyleEslintConfig[];
}

/**
 * Recursively resolve an old-style ESLint config to a flat rules map.
 * Extends are resolved depth-first; later entries and the config's own rules win.
 */
function flattenRules(
  configPath: string,
  visited = new Set<string>(),
): EslintRules {
  if (visited.has(configPath)) return {};
  visited.add(configPath);

  const config = req(configPath) as OldStyleEslintConfig;
  const rules: EslintRules = {};

  if (config.extends) {
    const exts = Array.isArray(config.extends) ? config.extends : [config.extends];
    for (const ext of exts) {
      try {
        if (ext.startsWith('plugin:')) {
          Object.assign(rules, resolvePluginConfig(ext));
          continue;
        }

        let resolvedPath: string;
        if (ext.startsWith('/') || ext.startsWith('./') || ext.startsWith('../')) {
          resolvedPath = req.resolve(resolve(dirname(configPath), ext));
        } else {
          // Named shareable config: 'airbnb' -> 'eslint-config-airbnb'
          const pkgName = ext.startsWith('eslint-config-') ? ext : `eslint-config-${ext}`;
          resolvedPath = req.resolve(pkgName);
        }
        Object.assign(rules, flattenRules(resolvedPath, visited));
      } catch {
        console.warn(`  [warn] Could not resolve extends entry: ${ext}`);
      }
    }
  }

  Object.assign(rules, config.rules ?? {});
  return rules;
}

/**
 * Resolve a `plugin:name/config` extends entry to a flat rules map.
 * Handles old-style plugin configs which may themselves have extends.
 */
function resolvePluginConfig(
  pluginRef: string,
  visited = new Set<string>(),
): EslintRules {
  // pluginRef format: "plugin:<pluginName>/<configName>"
  const withoutPrefix = pluginRef.slice('plugin:'.length);
  const slashIdx = withoutPrefix.indexOf('/');
  if (slashIdx === -1) return {};

  const pluginName = withoutPrefix.slice(0, slashIdx);
  const configName = withoutPrefix.slice(slashIdx + 1);

  try {
    const plugin = req(`eslint-plugin-${pluginName}`) as {
      configs?: Record<string, OldStyleEslintConfig>;
    };
    const pluginConfig = plugin.configs?.[configName];
    if (!pluginConfig) return {};

    const rules: EslintRules = {};

    if (pluginConfig.extends) {
      const exts = Array.isArray(pluginConfig.extends)
        ? pluginConfig.extends
        : [pluginConfig.extends];
      for (const ext of exts) {
        if (ext.startsWith('plugin:')) {
          if (!visited.has(ext)) {
            visited.add(ext);
            Object.assign(rules, resolvePluginConfig(ext, visited));
          }
        }
      }
    }

    Object.assign(rules, pluginConfig.rules ?? {});
    return rules;
  } catch {
    console.warn(`  [warn] Could not resolve plugin config: ${pluginRef}`);
    return {};
  }
}

interface ConfigEntry {
  /** Human-readable label used in console output */
  label: string;
  /** Package/path to require() as the entry point */
  entry: string;
  /** Output path relative to the repo root */
  output: string;
}

const configs: ConfigEntry[] = [
  {
    label: 'airbnb',
    entry: 'eslint-config-airbnb',
    output: 'airbnb/index.json',
  },
  {
    label: 'airbnb/base',
    entry: 'eslint-config-airbnb/base',
    output: 'airbnb/base.json',
  },
  {
    label: 'airbnb/hooks',
    entry: 'eslint-config-airbnb/hooks',
    output: 'airbnb/hooks.json',
  },
  {
    label: 'airbnb/legacy',
    entry: 'eslint-config-airbnb/legacy',
    output: 'airbnb/legacy.json',
  },
  {
    label: 'airbnb/whitespace',
    entry: 'eslint-config-airbnb/whitespace',
    output: 'airbnb/whitespace.json',
  },
];

for (const config of configs) {
  console.log(`Generating ${config.label}...`);

  const entryPath = req.resolve(config.entry);
  const rules = flattenRules(entryPath);

  console.log(`  Resolved ${Object.keys(rules).length} rules, migrating...`);

  // Pass the flattened rules as a single ESLint flat config object.
  // migrate() returns an oxlint-compatible config with supported rules only.
  const result = await migrate({ rules });

  // Remove $schema — child configs are extended from node_modules and the
  // relative path to oxlint's schema would be wrong from that location.
  delete result.$schema;

  const outputPath = join(configsDir, config.output);
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(result, null, 2) + '\n');

  const ruleCount = Object.keys(result.rules ?? {}).length;
  console.log(`  Written to configs/${config.output} (${ruleCount} oxlint rules)`);
}

console.log('\nDone.');
