# oxlint-config

Oxlint configurations ported from popular ESLint styleguides. Extend them in your `.oxlintrc.json` the same way you would extend the original ESLint configs.

## Available configs

| Package export | ESLint equivalent |
|---|---|
| `oxlint-config/airbnb` | `eslint-config-airbnb` |
| `oxlint-config/airbnb/base` | `eslint-config-airbnb/base` |
| `oxlint-config/airbnb/hooks` | `eslint-config-airbnb/hooks` |
| `oxlint-config/airbnb/legacy` | `eslint-config-airbnb/legacy` |
| `oxlint-config/airbnb/whitespace` | `eslint-config-airbnb/whitespace` |

## Usage

Install the package:

```sh
npm install --save-dev oxlint-config
# or
pnpm add -D oxlint-config
```

Then extend the config you want in your `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["./node_modules/oxlint-config/airbnb/hooks"]
}
```

Multiple configs can be combined. Later entries take precedence:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": [
    "./node_modules/oxlint-config/airbnb/base",
    "./node_modules/oxlint-config/airbnb/hooks"
  ]
}
```

> **Note:** oxlint's `extends` field takes file paths relative to the config file, not package names. Use `./node_modules/oxlint-config/<config>` to reference configs from this package.

## How it works

Each config in this package is generated from the corresponding ESLint config using [`@oxlint/migrate`](https://github.com/oxc-project/oxlint-migrate). The generation script:

1. Loads the source ESLint config and recursively resolves its `extends` chain to collect the full set of rules.
2. Passes the flattened rules through `@oxlint/migrate`, which maps supported rules to their oxlint equivalents and drops unsupported ones.
3. Writes the result as a JSON file under `configs/<styleguide>/`.

Rules that oxlint does not support are silently dropped. The generated files are committed to the repository so consumers do not need to run any build step.

## Contributing

### Regenerating configs

After updating a source styleguide dependency, regenerate all configs with:

```sh
pnpm generate
```

### Adding a new styleguide

1. Add the source ESLint config package as a devDependency.
2. Add entries to the `configs` array in `scripts/generate.ts`.
3. Add the corresponding `exports` entries in `package.json`.
4. Run `pnpm generate`.
5. Add test assertions for the new files in `tests/publish.test.ts`.

### Running tests

```sh
pnpm test
```

The test suite does a `pnpm publish --dry-run` and verifies that the expected config files are included in the package and that dev-only files are excluded.
