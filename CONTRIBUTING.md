# Contributing

## Regenerating configs

After updating a source styleguide dependency, regenerate all configs with:

```sh
pnpm generate
```

## Adding a new styleguide

1. Add the source ESLint config package as a devDependency.
2. Add entries to the `configs` array in `scripts/generate.ts`.
3. Add the corresponding `exports` entries in `package.json`.
4. Run `pnpm generate`.
5. Add test assertions for the new files in `tests/publish.test.ts`.

## Running tests

```sh
pnpm test
```

The test suite does a `pnpm publish --dry-run` and verifies that the expected config files are included in the package and that dev-only files are excluded.
