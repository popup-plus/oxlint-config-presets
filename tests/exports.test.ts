/**
 * Verifies that every entry in the package's exports map can be extended
 * by export name (e.g. "oxlint-config-presets/airbnb") without a .json
 * extension. oxlint resolves extends entries through Node's package exports
 * resolution, so the exports map in configs/package.json must cover all
 * published config files.
 */
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, mkdirSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const oxlintBin = join(rootDir, 'node_modules/.bin/oxlint');
const fixture = join(rootDir, 'tests/fixtures/sample.js');
const configsDir = join(rootDir, 'configs');
const pkg = JSON.parse(
  (await import('node:fs')).readFileSync(join(configsDir, 'package.json'), 'utf-8'),
) as { exports: Record<string, string> };

// Create a temp dir that simulates an end-user project with the package installed.
let tempDir: string;
let pkgDir: string;

before(() => {
  tempDir = mkdtempSync(join(tmpdir(), 'oxlint-exports-test-'));
  pkgDir = join(tempDir, 'node_modules', 'oxlint-config-presets');
  // Copy the whole configs/ directory into the fake installed package location.
  cpSync(configsDir, pkgDir, { recursive: true });
});

after(() => {
  rmSync(tempDir, { recursive: true });
});

const exportKeys = Object.keys(pkg.exports);

assert.ok(exportKeys.length > 0, 'No exports found in configs/package.json');

for (const exportKey of exportKeys) {
  // exportKey is like './airbnb', './@typescript-eslint/recommended', './@antfu'
  // The extends value is the bare specifier without leading './'
  const extendsValue = `oxlint-config-presets${exportKey.slice(1)}`;

  test(`extends "${extendsValue}" resolves via exports map`, () => {
    const configPath = join(tempDir, '.oxlintrc.json');
    writeFileSync(configPath, JSON.stringify({ extends: [extendsValue] }, null, 2));

    const result = spawnSync(oxlintBin, ['--config', configPath, fixture], {
      cwd: tempDir,
      encoding: 'utf-8',
    });

    const output = result.stdout + result.stderr;
    assert.ok(
      !output.includes('Failed to parse oxlint configuration file'),
      `Export "${extendsValue}" failed to resolve:\n${output}`,
    );
  });
}
