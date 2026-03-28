import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { globSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const oxlintBin = join(rootDir, 'node_modules/.bin/oxlint');
const fixture = join(rootDir, 'tests/fixtures/sample.js');

const configFiles = globSync('configs/*/*.json', { cwd: rootDir });

assert.ok(configFiles.length > 0, 'No config files found under configs/');

for (const configFile of configFiles) {
  const label = relative(rootDir, join(rootDir, configFile));

  test(`oxlint runs without config errors using ${label}`, () => {
    const result = spawnSync(
      oxlintBin,
      ['--config', configFile, fixture],
      { cwd: rootDir, encoding: 'utf-8' },
    );

    const output = result.stdout + result.stderr;

    assert.ok(
      !output.includes('Failed to parse oxlint configuration file'),
      `Config parse error for ${label}:\n${output}`,
    );
  });
}
