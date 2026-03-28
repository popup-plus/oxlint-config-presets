# oxlint-config

Oxlint configurations ported from popular ESLint styleguides. Extend them in your `.oxlintrc.json` the same way you would extend the original ESLint configs.

Install the package:

```sh
npm install --save-dev oxlint-config-presets
# or
pnpm add -D oxlint-config-presets
```

Then extend the config you want in your `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["./node_modules/oxlint-config-presets/airbnb/hooks"]
}
```

Multiple configs can be combined. Later entries take precedence:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": [
    "./node_modules/oxlint-config-presets/airbnb/base",
    "./node_modules/oxlint-config-presets/airbnb/hooks"
  ]
}
```

> **Note:** oxlint's `extends` field takes file paths relative to the config file, not package names. Use `./node_modules/oxlint-config-presets/<config>` to reference configs from this package.

## Available configs

| Package export | ESLint equivalent | Oxlint rules |
|---|---|---|
| `oxlint-config-presets/airbnb` | `eslint-config-airbnb` | 211 |
| `oxlint-config-presets/airbnb/base` | `eslint-config-airbnb/base` | 149 |
| `oxlint-config-presets/airbnb/hooks` | `eslint-config-airbnb/hooks` | 2 |
| `oxlint-config-presets/airbnb/legacy` | `eslint-config-airbnb/legacy` | 114 |
| `oxlint-config-presets/airbnb/whitespace` | `eslint-config-airbnb/whitespace` | 211 |
| `oxlint-config-presets/standard` | `eslint-config-standard` | 98 |
| `oxlint-config-presets/google` | `eslint-config-google` | 21 |
| `oxlint-config-presets/typescript-eslint/recommended` | `@typescript-eslint/eslint-plugin — recommended` | 24 |
| `oxlint-config-presets/typescript-eslint/recommended-type-checked` | `@typescript-eslint/eslint-plugin — recommended-type-checked` | 24 |
| `oxlint-config-presets/typescript-eslint/strict` | `@typescript-eslint/eslint-plugin — strict` | 32 |
| `oxlint-config-presets/typescript-eslint/strict-type-checked` | `@typescript-eslint/eslint-plugin — strict-type-checked` | 32 |
| `oxlint-config-presets/typescript-eslint/stylistic` | `@typescript-eslint/eslint-plugin — stylistic` | 17 |
| `oxlint-config-presets/typescript-eslint/stylistic-type-checked` | `@typescript-eslint/eslint-plugin — stylistic-type-checked` | 17 |
| `oxlint-config-presets/typescript-eslint/all` | `@typescript-eslint/eslint-plugin — all` | 65 |
| `oxlint-config-presets/eslint-js/recommended` | `@eslint/js — recommended` | 61 |
| `oxlint-config-presets/eslint-js/all` | `@eslint/js — all` | 169 |

### `oxlint-config-presets/airbnb`

<details>
<summary>208 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `array-callback-return` | error *(with options)* |
| `block-scoped-var` | error |
| `class-methods-use-this` | error *(with options)* |
| `curly` | error *(with options)* |
| `default-case` | error *(with options)* |
| `default-case-last` | error |
| `default-param-last` | error |
| `eqeqeq` | error *(with options)* |
| `grouped-accessor-pairs` | error |
| `guard-for-in` | error |
| `max-classes-per-file` | error *(with options)* |
| `no-alert` | warn |
| `no-caller` | error |
| `no-case-declarations` | error |
| `no-constructor-return` | error |
| `no-else-return` | error *(with options)* |
| `no-empty-function` | error *(with options)* |
| `no-empty-pattern` | error |
| `no-eval` | error |
| `no-extend-native` | error |
| `no-extra-bind` | error |
| `no-extra-label` | error |
| `no-fallthrough` | error |
| `no-global-assign` | error *(with options)* |
| `no-iterator` | error |
| `no-labels` | error *(with options)* |
| `no-lone-blocks` | error |
| `no-loop-func` | error |
| `no-multi-str` | error |
| `no-new` | error |
| `no-new-func` | error |
| `no-new-wrappers` | error |
| `no-nonoctal-decimal-escape` | error |
| `no-param-reassign` | error *(with options)* |
| `no-proto` | error |
| `no-redeclare` | error |
| `no-return-assign` | error *(with options)* |
| `no-script-url` | error |
| `no-self-assign` | error *(with options)* |
| `no-self-compare` | error |
| `no-sequences` | error |
| `no-throw-literal` | error |
| `no-unused-expressions` | error *(with options)* |
| `no-unused-labels` | error |
| `no-useless-catch` | error |
| `no-useless-concat` | error |
| `no-useless-escape` | error |
| `no-useless-return` | error |
| `no-void` | error |
| `no-with` | error |
| `prefer-promise-reject-errors` | error *(with options)* |
| `radix` | error |
| `vars-on-top` | error |
| `yoda` | error |
| `for-direction` | error |
| `getter-return` | error *(with options)* |
| `no-async-promise-executor` | error |
| `no-await-in-loop` | error |
| `no-compare-neg-zero` | error |
| `no-cond-assign` | error *(with options)* |
| `no-console` | warn |
| `no-constant-condition` | warn |
| `no-control-regex` | error |
| `no-debugger` | error |
| `no-dupe-else-if` | error |
| `no-dupe-keys` | error |
| `no-duplicate-case` | error |
| `no-empty` | error |
| `no-empty-character-class` | error |
| `no-ex-assign` | error |
| `no-extra-boolean-cast` | error |
| `no-func-assign` | error |
| `no-import-assign` | error |
| `no-inner-declarations` | error |
| `no-invalid-regexp` | error |
| `no-irregular-whitespace` | error |
| `no-loss-of-precision` | error |
| `no-misleading-character-class` | error |
| `no-obj-calls` | error |
| `no-promise-executor-return` | error |
| `no-prototype-builtins` | error |
| `no-regex-spaces` | error |
| `no-setter-return` | error |
| `no-sparse-arrays` | error |
| `no-template-curly-in-string` | error |
| `no-unexpected-multiline` | error |
| `no-unreachable` | error |
| `no-unsafe-finally` | error |
| `no-unsafe-negation` | error |
| `no-unsafe-optional-chaining` | error *(with options)* |
| `no-useless-backreference` | error |
| `use-isnan` | error |
| `valid-typeof` | error *(with options)* |
| `func-names` | warn |
| `new-cap` | error *(with options)* |
| `no-array-constructor` | error |
| `no-bitwise` | error |
| `no-continue` | error |
| `no-lonely-if` | error |
| `no-multi-assign` | error |
| `no-nested-ternary` | error |
| `no-plusplus` | error |
| `no-unneeded-ternary` | error *(with options)* |
| `operator-assignment` | error *(with options)* |
| `prefer-exponentiation-operator` | error |
| `prefer-object-spread` | error |
| `unicode-bom` | error *(with options)* |
| `no-delete-var` | error |
| `no-label-var` | error |
| `no-restricted-globals` | error *(with options)* |
| `no-shadow` | error |
| `no-shadow-restricted-names` | error |
| `no-undef` | error |
| `no-unused-vars` | error *(with options)* |
| `no-use-before-define` | error *(with options)* |
| `arrow-body-style` | error *(with options)* |
| `constructor-super` | error |
| `no-class-assign` | error |
| `no-const-assign` | error |
| `no-dupe-class-members` | error |
| `no-this-before-super` | error |
| `no-useless-computed-key` | error |
| `no-useless-constructor` | error |
| `no-useless-rename` | error *(with options)* |
| `no-var` | error |
| `prefer-const` | error *(with options)* |
| `prefer-destructuring` | error *(with options)* |
| `prefer-numeric-literals` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `prefer-template` | error |
| `require-yield` | error |
| `symbol-description` | error |
| `import/named` | error |
| `import/export` | error |
| `import/no-named-as-default` | error |
| `import/no-named-as-default-member` | error |
| `import/no-mutable-exports` | error |
| `import/no-amd` | error |
| `import/first` | error |
| `import/no-duplicates` | error |
| `import/extensions` | error *(with options)* |
| `import/prefer-default-export` | error |
| `import/no-absolute-path` | error |
| `import/no-dynamic-require` | error |
| `import/no-webpack-loader-syntax` | error |
| `import/no-named-default` | error |
| `import/no-self-import` | error |
| `react/jsx-boolean-value` | error *(with options)* |
| `react/jsx-no-undef` | error |
| `react/jsx-pascal-case` | error *(with options)* |
| `react/no-danger` | warn |
| `react/no-will-update-set-state` | error |
| `react/no-is-mounted` | error |
| `react/no-string-refs` | error |
| `react/no-unknown-property` | error |
| `react/prefer-es6-class` | error *(with options)* |
| `react/react-in-jsx-scope` | error |
| `react/require-render-return` | error |
| `react/self-closing-comp` | error |
| `react/jsx-no-target-blank` | error *(with options)* |
| `react/jsx-filename-extension` | error *(with options)* |
| `react/jsx-no-comment-textnodes` | error |
| `react/no-render-return-value` | error |
| `react/no-find-dom-node` | error |
| `react/no-danger-with-children` | error |
| `react/style-prop-object` | error |
| `react/no-unescaped-entities` | error |
| `react/no-children-prop` | error |
| `react/no-array-index-key` | error |
| `react/void-dom-elements-no-children` | error |
| `react/no-redundant-should-component-update` | error |
| `react/jsx-curly-brace-presence` | error *(with options)* |
| `react/button-has-type` | error *(with options)* |
| `react/no-this-in-sfc` | error |
| `react/jsx-fragments` | error *(with options)* |
| `react/state-in-constructor` | error *(with options)* |
| `react/jsx-props-no-spreading` | error *(with options)* |
| `react/jsx-no-script-url` | error *(with options)* |
| `react/jsx-no-useless-fragment` | error |
| `react/jsx-no-constructed-context-values` | error |
| `react/no-namespace` | error |
| `jsx-a11y/alt-text` | error *(with options)* |
| `jsx-a11y/anchor-is-valid` | error *(with options)* |
| `jsx-a11y/aria-activedescendant-has-tabindex` | error |
| `jsx-a11y/aria-props` | error |
| `jsx-a11y/aria-proptypes` | error |
| `jsx-a11y/aria-role` | error *(with options)* |
| `jsx-a11y/aria-unsupported-elements` | error |
| `jsx-a11y/click-events-have-key-events` | error |
| `jsx-a11y/heading-has-content` | error *(with options)* |
| `jsx-a11y/html-has-lang` | error |
| `jsx-a11y/iframe-has-title` | error |
| `jsx-a11y/img-redundant-alt` | error |
| `jsx-a11y/label-has-associated-control` | error *(with options)* |
| `jsx-a11y/lang` | error |
| `jsx-a11y/media-has-caption` | error *(with options)* |
| `jsx-a11y/mouse-events-have-key-events` | error |
| `jsx-a11y/no-access-key` | error |
| `jsx-a11y/no-autofocus` | error *(with options)* |
| `jsx-a11y/no-distracting-elements` | error *(with options)* |
| `jsx-a11y/no-noninteractive-tabindex` | error *(with options)* |
| `jsx-a11y/no-redundant-roles` | error |
| `jsx-a11y/no-static-element-interactions` | error *(with options)* |
| `jsx-a11y/role-has-required-aria-props` | error |
| `jsx-a11y/role-supports-aria-props` | error |
| `jsx-a11y/scope` | error |
| `jsx-a11y/tabindex-no-positive` | error |

</details>

<details>
<summary>3 rules migrated without options (incompatible schema)</summary>

These rules are enabled but their configuration options were dropped because oxlint's schema does not accept them. Only the severity level was kept.

`import/no-cycle`, `jsx-a11y/anchor-has-content`, `react/jsx-no-duplicate-props`

</details>

<details>
<summary>135 rules have no oxlint equivalent</summary>

**Not portable to oxlint**

`consistent-return`, `dot-notation`, `dot-location`, `no-floating-decimal`, `no-multi-spaces`, `no-octal`, `no-octal-escape`, `no-return-await`, `wrap-iife`, `no-dupe-args`, `no-extra-semi`, `global-require`, `no-buffer-constructor`, `no-new-require`, `no-path-concat`, `array-bracket-spacing`, `block-spacing`, `brace-style`, `camelcase`, `comma-dangle`, `comma-spacing`, `comma-style`, `computed-property-spacing`, `eol-last`, `function-call-argument-newline`, `func-call-spacing`, `function-paren-newline`, `implicit-arrow-linebreak`, `indent`, `jsx-quotes`, `key-spacing`, `keyword-spacing`, `linebreak-style`, `lines-between-class-members`, `lines-around-directive`, `max-len`, `new-parens`, `newline-per-chained-call`, `no-mixed-operators`, `no-mixed-spaces-and-tabs`, `no-multiple-empty-lines`, `no-new-object`, `no-spaced-func`, `no-tabs`, `no-trailing-spaces`, `no-whitespace-before-property`, `nonblock-statement-body-position`, `object-curly-spacing`, `object-curly-newline`, `object-property-newline`, `one-var-declaration-per-line`, `operator-linebreak`, `padded-blocks`, `quote-props`, `quotes`, `semi`, `semi-spacing`, `semi-style`, `space-before-blocks`, `space-before-function-paren`, `space-in-parens`, `space-infix-ops`, `space-unary-ops`, `spaced-comment`, `switch-colon-spacing`, `template-tag-spacing`, `no-undef-init`, `arrow-parens`, `arrow-spacing`, `generator-star-spacing`, `no-confusing-arrow`, `no-new-symbol`, `rest-spread-spacing`, `template-curly-spacing`, `yield-star-spacing`, `import/no-unresolved`, `import/order`, `react/forbid-prop-types`, `react/jsx-closing-bracket-location`, `react/jsx-closing-tag-location`, `react/jsx-curly-spacing`, `react/jsx-indent-props`, `react/jsx-max-props-per-line`, `react/jsx-uses-react`, `react/jsx-uses-vars`, `react/sort-comp`, `react/jsx-wrap-multilines`, `react/jsx-first-prop-new-line`, `react/jsx-equals-spacing`, `react/jsx-indent`, `react/no-unused-prop-types`, `react/jsx-tag-spacing`, `react/forbid-foreign-prop-types`, `react/default-props-match-prop-types`, `react/no-unused-state`, `react/jsx-one-expression-per-line`, `react/no-access-state-in-setstate`, `react/jsx-props-no-multi-spaces`, `react/jsx-curly-newline`, `react/static-property-placement`, `react/prefer-exact-props`, `react/no-unused-class-component-methods`

**Not yet implemented in oxlint**

`no-implied-eval`, `no-restricted-properties`, `prefer-regex-literals`, `no-unreachable-loop`, `no-restricted-syntax`, `no-underscore-dangle`, `one-var`, `no-restricted-exports`, `object-shorthand`, `prefer-arrow-callback`, `import/no-extraneous-dependencies`, `import/newline-after-import`, `import/no-useless-path-segments`, `import/no-import-module-exports`, `import/no-relative-packages`, `strict`, `react/jsx-no-bind`, `react/no-deprecated`, `react/no-did-update-set-state`, `react/prefer-stateless-function`, `react/prop-types`, `react/require-default-props`, `react/no-typos`, `react/destructuring-assignment`, `react/function-component-definition`, `react/no-unstable-nested-components`, `react/no-arrow-function-lifecycle`, `react/no-invalid-html-attribute`, `jsx-a11y/control-has-associated-label`, `jsx-a11y/interactive-supports-focus`, `jsx-a11y/no-interactive-element-to-noninteractive-role`, `jsx-a11y/no-noninteractive-element-interactions`, `jsx-a11y/no-noninteractive-element-to-interactive-role`

</details>

### `oxlint-config-presets/airbnb/base`

<details>
<summary>148 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `array-callback-return` | error *(with options)* |
| `block-scoped-var` | error |
| `class-methods-use-this` | error *(with options)* |
| `curly` | error *(with options)* |
| `default-case` | error *(with options)* |
| `default-case-last` | error |
| `default-param-last` | error |
| `eqeqeq` | error *(with options)* |
| `grouped-accessor-pairs` | error |
| `guard-for-in` | error |
| `max-classes-per-file` | error *(with options)* |
| `no-alert` | warn |
| `no-caller` | error |
| `no-case-declarations` | error |
| `no-constructor-return` | error |
| `no-else-return` | error *(with options)* |
| `no-empty-function` | error *(with options)* |
| `no-empty-pattern` | error |
| `no-eval` | error |
| `no-extend-native` | error |
| `no-extra-bind` | error |
| `no-extra-label` | error |
| `no-fallthrough` | error |
| `no-global-assign` | error *(with options)* |
| `no-iterator` | error |
| `no-labels` | error *(with options)* |
| `no-lone-blocks` | error |
| `no-loop-func` | error |
| `no-multi-str` | error |
| `no-new` | error |
| `no-new-func` | error |
| `no-new-wrappers` | error |
| `no-nonoctal-decimal-escape` | error |
| `no-param-reassign` | error *(with options)* |
| `no-proto` | error |
| `no-redeclare` | error |
| `no-return-assign` | error *(with options)* |
| `no-script-url` | error |
| `no-self-assign` | error *(with options)* |
| `no-self-compare` | error |
| `no-sequences` | error |
| `no-throw-literal` | error |
| `no-unused-expressions` | error *(with options)* |
| `no-unused-labels` | error |
| `no-useless-catch` | error |
| `no-useless-concat` | error |
| `no-useless-escape` | error |
| `no-useless-return` | error |
| `no-void` | error |
| `no-with` | error |
| `prefer-promise-reject-errors` | error *(with options)* |
| `radix` | error |
| `vars-on-top` | error |
| `yoda` | error |
| `for-direction` | error |
| `getter-return` | error *(with options)* |
| `no-async-promise-executor` | error |
| `no-await-in-loop` | error |
| `no-compare-neg-zero` | error |
| `no-cond-assign` | error *(with options)* |
| `no-console` | warn |
| `no-constant-condition` | warn |
| `no-control-regex` | error |
| `no-debugger` | error |
| `no-dupe-else-if` | error |
| `no-dupe-keys` | error |
| `no-duplicate-case` | error |
| `no-empty` | error |
| `no-empty-character-class` | error |
| `no-ex-assign` | error |
| `no-extra-boolean-cast` | error |
| `no-func-assign` | error |
| `no-import-assign` | error |
| `no-inner-declarations` | error |
| `no-invalid-regexp` | error |
| `no-irregular-whitespace` | error |
| `no-loss-of-precision` | error |
| `no-misleading-character-class` | error |
| `no-obj-calls` | error |
| `no-promise-executor-return` | error |
| `no-prototype-builtins` | error |
| `no-regex-spaces` | error |
| `no-setter-return` | error |
| `no-sparse-arrays` | error |
| `no-template-curly-in-string` | error |
| `no-unexpected-multiline` | error |
| `no-unreachable` | error |
| `no-unsafe-finally` | error |
| `no-unsafe-negation` | error |
| `no-unsafe-optional-chaining` | error *(with options)* |
| `no-useless-backreference` | error |
| `use-isnan` | error |
| `valid-typeof` | error *(with options)* |
| `func-names` | warn |
| `new-cap` | error *(with options)* |
| `no-array-constructor` | error |
| `no-bitwise` | error |
| `no-continue` | error |
| `no-lonely-if` | error |
| `no-multi-assign` | error |
| `no-nested-ternary` | error |
| `no-plusplus` | error |
| `no-unneeded-ternary` | error *(with options)* |
| `operator-assignment` | error *(with options)* |
| `prefer-exponentiation-operator` | error |
| `prefer-object-spread` | error |
| `unicode-bom` | error *(with options)* |
| `no-delete-var` | error |
| `no-label-var` | error |
| `no-restricted-globals` | error *(with options)* |
| `no-shadow` | error |
| `no-shadow-restricted-names` | error |
| `no-undef` | error |
| `no-unused-vars` | error *(with options)* |
| `no-use-before-define` | error *(with options)* |
| `arrow-body-style` | error *(with options)* |
| `constructor-super` | error |
| `no-class-assign` | error |
| `no-const-assign` | error |
| `no-dupe-class-members` | error |
| `no-this-before-super` | error |
| `no-useless-computed-key` | error |
| `no-useless-constructor` | error |
| `no-useless-rename` | error *(with options)* |
| `no-var` | error |
| `prefer-const` | error *(with options)* |
| `prefer-destructuring` | error *(with options)* |
| `prefer-numeric-literals` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `prefer-template` | error |
| `require-yield` | error |
| `symbol-description` | error |
| `import/named` | error |
| `import/export` | error |
| `import/no-named-as-default` | error |
| `import/no-named-as-default-member` | error |
| `import/no-mutable-exports` | error |
| `import/no-amd` | error |
| `import/first` | error |
| `import/no-duplicates` | error |
| `import/extensions` | error *(with options)* |
| `import/prefer-default-export` | error |
| `import/no-absolute-path` | error |
| `import/no-dynamic-require` | error |
| `import/no-webpack-loader-syntax` | error |
| `import/no-named-default` | error |
| `import/no-self-import` | error |

</details>

<details>
<summary>1 rules migrated without options (incompatible schema)</summary>

These rules are enabled but their configuration options were dropped because oxlint's schema does not accept them. Only the severity level was kept.

`import/no-cycle`

</details>

<details>
<summary>92 rules have no oxlint equivalent</summary>

**Not portable to oxlint**

`consistent-return`, `dot-notation`, `dot-location`, `no-floating-decimal`, `no-multi-spaces`, `no-octal`, `no-octal-escape`, `no-return-await`, `wrap-iife`, `no-dupe-args`, `no-extra-semi`, `global-require`, `no-buffer-constructor`, `no-new-require`, `no-path-concat`, `array-bracket-spacing`, `block-spacing`, `brace-style`, `camelcase`, `comma-dangle`, `comma-spacing`, `comma-style`, `computed-property-spacing`, `eol-last`, `function-call-argument-newline`, `func-call-spacing`, `function-paren-newline`, `implicit-arrow-linebreak`, `indent`, `key-spacing`, `keyword-spacing`, `linebreak-style`, `lines-between-class-members`, `lines-around-directive`, `max-len`, `new-parens`, `newline-per-chained-call`, `no-mixed-operators`, `no-mixed-spaces-and-tabs`, `no-multiple-empty-lines`, `no-new-object`, `no-spaced-func`, `no-tabs`, `no-trailing-spaces`, `no-whitespace-before-property`, `nonblock-statement-body-position`, `object-curly-spacing`, `object-curly-newline`, `object-property-newline`, `one-var-declaration-per-line`, `operator-linebreak`, `padded-blocks`, `quote-props`, `quotes`, `semi`, `semi-spacing`, `semi-style`, `space-before-blocks`, `space-before-function-paren`, `space-in-parens`, `space-infix-ops`, `space-unary-ops`, `spaced-comment`, `switch-colon-spacing`, `template-tag-spacing`, `no-undef-init`, `arrow-parens`, `arrow-spacing`, `generator-star-spacing`, `no-confusing-arrow`, `no-new-symbol`, `rest-spread-spacing`, `template-curly-spacing`, `yield-star-spacing`, `import/no-unresolved`, `import/order`

**Not yet implemented in oxlint**

`no-implied-eval`, `no-restricted-properties`, `prefer-regex-literals`, `no-unreachable-loop`, `no-restricted-syntax`, `no-underscore-dangle`, `one-var`, `no-restricted-exports`, `object-shorthand`, `prefer-arrow-callback`, `import/no-extraneous-dependencies`, `import/newline-after-import`, `import/no-useless-path-segments`, `import/no-import-module-exports`, `import/no-relative-packages`, `strict`

</details>

### `oxlint-config-presets/airbnb/hooks`

<details>
<summary>2 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `react-hooks/rules-of-hooks` | error |
| `react-hooks/exhaustive-deps` | error |

</details>

### `oxlint-config-presets/airbnb/legacy`

<details>
<summary>114 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `array-callback-return` | error *(with options)* |
| `block-scoped-var` | error |
| `class-methods-use-this` | error *(with options)* |
| `curly` | error *(with options)* |
| `default-case` | error *(with options)* |
| `default-case-last` | error |
| `default-param-last` | error |
| `eqeqeq` | error *(with options)* |
| `grouped-accessor-pairs` | error |
| `guard-for-in` | error |
| `max-classes-per-file` | error *(with options)* |
| `no-alert` | warn |
| `no-caller` | error |
| `no-case-declarations` | error |
| `no-constructor-return` | error |
| `no-else-return` | error *(with options)* |
| `no-empty-function` | error *(with options)* |
| `no-empty-pattern` | error |
| `no-eval` | error |
| `no-extend-native` | error |
| `no-extra-bind` | error |
| `no-extra-label` | error |
| `no-fallthrough` | error |
| `no-global-assign` | error *(with options)* |
| `no-iterator` | error |
| `no-labels` | error *(with options)* |
| `no-lone-blocks` | error |
| `no-loop-func` | error |
| `no-multi-str` | error |
| `no-new` | error |
| `no-new-func` | error |
| `no-new-wrappers` | error |
| `no-nonoctal-decimal-escape` | error |
| `no-param-reassign` | error *(with options)* |
| `no-proto` | error |
| `no-redeclare` | error |
| `no-return-assign` | error *(with options)* |
| `no-script-url` | error |
| `no-self-assign` | error *(with options)* |
| `no-self-compare` | error |
| `no-sequences` | error |
| `no-throw-literal` | error |
| `no-unused-expressions` | error *(with options)* |
| `no-unused-labels` | error |
| `no-useless-catch` | error |
| `no-useless-concat` | error |
| `no-useless-escape` | error |
| `no-useless-return` | error |
| `no-void` | error |
| `no-with` | error |
| `prefer-promise-reject-errors` | error *(with options)* |
| `radix` | error |
| `vars-on-top` | error |
| `yoda` | error |
| `for-direction` | error |
| `getter-return` | error *(with options)* |
| `no-async-promise-executor` | error |
| `no-await-in-loop` | error |
| `no-compare-neg-zero` | error |
| `no-cond-assign` | error *(with options)* |
| `no-console` | warn |
| `no-constant-condition` | warn |
| `no-control-regex` | error |
| `no-debugger` | error |
| `no-dupe-else-if` | error |
| `no-dupe-keys` | error |
| `no-duplicate-case` | error |
| `no-empty` | error |
| `no-empty-character-class` | error |
| `no-ex-assign` | error |
| `no-extra-boolean-cast` | error |
| `no-func-assign` | error |
| `no-import-assign` | error |
| `no-inner-declarations` | error |
| `no-invalid-regexp` | error |
| `no-irregular-whitespace` | error |
| `no-loss-of-precision` | error |
| `no-misleading-character-class` | error |
| `no-obj-calls` | error |
| `no-promise-executor-return` | error |
| `no-prototype-builtins` | error |
| `no-regex-spaces` | error |
| `no-setter-return` | error |
| `no-sparse-arrays` | error |
| `no-template-curly-in-string` | error |
| `no-unexpected-multiline` | error |
| `no-unreachable` | error |
| `no-unsafe-finally` | error |
| `no-unsafe-negation` | error |
| `no-unsafe-optional-chaining` | error *(with options)* |
| `no-useless-backreference` | error |
| `use-isnan` | error |
| `valid-typeof` | error *(with options)* |
| `func-names` | warn |
| `new-cap` | error *(with options)* |
| `no-array-constructor` | error |
| `no-bitwise` | error |
| `no-continue` | error |
| `no-lonely-if` | error |
| `no-multi-assign` | error |
| `no-nested-ternary` | error |
| `no-plusplus` | error |
| `no-unneeded-ternary` | error *(with options)* |
| `operator-assignment` | error *(with options)* |
| `prefer-exponentiation-operator` | error |
| `unicode-bom` | error *(with options)* |
| `no-delete-var` | error |
| `no-label-var` | error |
| `no-restricted-globals` | error *(with options)* |
| `no-shadow` | error |
| `no-shadow-restricted-names` | error |
| `no-undef` | error |
| `no-unused-vars` | error *(with options)* |
| `no-use-before-define` | error *(with options)* |

</details>

<details>
<summary>74 rules have no oxlint equivalent</summary>

**Not portable to oxlint**

`consistent-return`, `dot-notation`, `dot-location`, `no-floating-decimal`, `no-multi-spaces`, `no-octal`, `no-octal-escape`, `no-return-await`, `wrap-iife`, `no-dupe-args`, `no-extra-semi`, `global-require`, `no-buffer-constructor`, `no-new-require`, `no-path-concat`, `array-bracket-spacing`, `block-spacing`, `brace-style`, `camelcase`, `comma-dangle`, `comma-spacing`, `comma-style`, `computed-property-spacing`, `eol-last`, `function-call-argument-newline`, `func-call-spacing`, `function-paren-newline`, `implicit-arrow-linebreak`, `indent`, `key-spacing`, `keyword-spacing`, `linebreak-style`, `lines-between-class-members`, `lines-around-directive`, `max-len`, `new-parens`, `newline-per-chained-call`, `no-mixed-operators`, `no-mixed-spaces-and-tabs`, `no-multiple-empty-lines`, `no-new-object`, `no-spaced-func`, `no-tabs`, `no-trailing-spaces`, `no-whitespace-before-property`, `nonblock-statement-body-position`, `object-curly-spacing`, `object-curly-newline`, `object-property-newline`, `one-var-declaration-per-line`, `operator-linebreak`, `padded-blocks`, `quote-props`, `quotes`, `semi`, `semi-spacing`, `semi-style`, `space-before-blocks`, `space-before-function-paren`, `space-in-parens`, `space-infix-ops`, `space-unary-ops`, `spaced-comment`, `switch-colon-spacing`, `template-tag-spacing`, `no-undef-init`

**Not yet implemented in oxlint**

`no-implied-eval`, `no-restricted-properties`, `prefer-regex-literals`, `no-unreachable-loop`, `no-restricted-syntax`, `no-underscore-dangle`, `one-var`, `strict`

</details>

### `oxlint-config-presets/airbnb/whitespace`

<details>
<summary>208 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `array-callback-return` | warn *(with options)* |
| `block-scoped-var` | warn |
| `class-methods-use-this` | warn *(with options)* |
| `curly` | warn *(with options)* |
| `default-case` | warn *(with options)* |
| `default-case-last` | warn |
| `default-param-last` | warn |
| `eqeqeq` | warn *(with options)* |
| `grouped-accessor-pairs` | warn |
| `guard-for-in` | warn |
| `max-classes-per-file` | warn *(with options)* |
| `no-alert` | warn |
| `no-caller` | warn |
| `no-case-declarations` | warn |
| `no-constructor-return` | warn |
| `no-else-return` | warn *(with options)* |
| `no-empty-function` | warn *(with options)* |
| `no-empty-pattern` | warn |
| `no-eval` | warn |
| `no-extend-native` | warn |
| `no-extra-bind` | warn |
| `no-extra-label` | warn |
| `no-fallthrough` | warn |
| `no-global-assign` | warn *(with options)* |
| `no-iterator` | warn |
| `no-labels` | warn *(with options)* |
| `no-lone-blocks` | warn |
| `no-loop-func` | warn |
| `no-multi-str` | warn |
| `no-new` | warn |
| `no-new-func` | warn |
| `no-new-wrappers` | warn |
| `no-nonoctal-decimal-escape` | warn |
| `no-param-reassign` | warn *(with options)* |
| `no-proto` | warn |
| `no-redeclare` | warn |
| `no-return-assign` | warn *(with options)* |
| `no-script-url` | warn |
| `no-self-assign` | warn *(with options)* |
| `no-self-compare` | warn |
| `no-sequences` | warn |
| `no-throw-literal` | warn |
| `no-unused-expressions` | warn *(with options)* |
| `no-unused-labels` | warn |
| `no-useless-catch` | warn |
| `no-useless-concat` | warn |
| `no-useless-escape` | warn |
| `no-useless-return` | warn |
| `no-void` | warn |
| `no-with` | warn |
| `prefer-promise-reject-errors` | warn *(with options)* |
| `radix` | warn |
| `vars-on-top` | warn |
| `yoda` | warn |
| `for-direction` | warn |
| `getter-return` | warn *(with options)* |
| `no-async-promise-executor` | warn |
| `no-await-in-loop` | warn |
| `no-compare-neg-zero` | warn |
| `no-cond-assign` | warn *(with options)* |
| `no-console` | warn |
| `no-constant-condition` | warn |
| `no-control-regex` | warn |
| `no-debugger` | warn |
| `no-dupe-else-if` | warn |
| `no-dupe-keys` | warn |
| `no-duplicate-case` | warn |
| `no-empty` | warn |
| `no-empty-character-class` | warn |
| `no-ex-assign` | warn |
| `no-extra-boolean-cast` | warn |
| `no-func-assign` | warn |
| `no-import-assign` | warn |
| `no-inner-declarations` | warn |
| `no-invalid-regexp` | warn |
| `no-irregular-whitespace` | error |
| `no-loss-of-precision` | warn |
| `no-misleading-character-class` | warn |
| `no-obj-calls` | warn |
| `no-promise-executor-return` | warn |
| `no-prototype-builtins` | warn |
| `no-regex-spaces` | error |
| `no-setter-return` | warn |
| `no-sparse-arrays` | warn |
| `no-template-curly-in-string` | warn |
| `no-unexpected-multiline` | warn |
| `no-unreachable` | warn |
| `no-unsafe-finally` | warn |
| `no-unsafe-negation` | warn |
| `no-unsafe-optional-chaining` | warn *(with options)* |
| `no-useless-backreference` | warn |
| `use-isnan` | warn |
| `valid-typeof` | warn *(with options)* |
| `func-names` | warn |
| `new-cap` | warn *(with options)* |
| `no-array-constructor` | warn |
| `no-bitwise` | warn |
| `no-continue` | warn |
| `no-lonely-if` | warn |
| `no-multi-assign` | warn |
| `no-nested-ternary` | warn |
| `no-plusplus` | warn |
| `no-unneeded-ternary` | warn *(with options)* |
| `operator-assignment` | warn *(with options)* |
| `prefer-exponentiation-operator` | warn |
| `prefer-object-spread` | warn |
| `unicode-bom` | warn *(with options)* |
| `no-delete-var` | warn |
| `no-label-var` | warn |
| `no-restricted-globals` | warn *(with options)* |
| `no-shadow` | warn |
| `no-shadow-restricted-names` | warn |
| `no-undef` | warn |
| `no-unused-vars` | warn *(with options)* |
| `no-use-before-define` | warn *(with options)* |
| `arrow-body-style` | warn *(with options)* |
| `constructor-super` | warn |
| `no-class-assign` | warn |
| `no-const-assign` | warn |
| `no-dupe-class-members` | warn |
| `no-this-before-super` | warn |
| `no-useless-computed-key` | warn |
| `no-useless-constructor` | warn |
| `no-useless-rename` | warn *(with options)* |
| `no-var` | warn |
| `prefer-const` | warn *(with options)* |
| `prefer-destructuring` | warn *(with options)* |
| `prefer-numeric-literals` | warn |
| `prefer-rest-params` | warn |
| `prefer-spread` | warn |
| `prefer-template` | warn |
| `require-yield` | warn |
| `symbol-description` | warn |
| `import/named` | warn |
| `import/export` | warn |
| `import/no-named-as-default` | warn |
| `import/no-named-as-default-member` | warn |
| `import/no-mutable-exports` | warn |
| `import/no-amd` | warn |
| `import/first` | warn |
| `import/no-duplicates` | warn |
| `import/extensions` | warn *(with options)* |
| `import/prefer-default-export` | warn |
| `import/no-absolute-path` | warn |
| `import/no-dynamic-require` | warn |
| `import/no-webpack-loader-syntax` | warn |
| `import/no-named-default` | warn |
| `import/no-self-import` | warn |
| `react/jsx-boolean-value` | warn *(with options)* |
| `react/jsx-no-undef` | warn |
| `react/jsx-pascal-case` | warn *(with options)* |
| `react/no-danger` | warn |
| `react/no-will-update-set-state` | warn |
| `react/no-is-mounted` | warn |
| `react/no-string-refs` | warn |
| `react/no-unknown-property` | warn |
| `react/prefer-es6-class` | warn *(with options)* |
| `react/react-in-jsx-scope` | warn |
| `react/require-render-return` | warn |
| `react/self-closing-comp` | warn |
| `react/jsx-no-target-blank` | warn *(with options)* |
| `react/jsx-filename-extension` | warn *(with options)* |
| `react/jsx-no-comment-textnodes` | warn |
| `react/no-render-return-value` | warn |
| `react/no-find-dom-node` | warn |
| `react/no-danger-with-children` | warn |
| `react/style-prop-object` | warn |
| `react/no-unescaped-entities` | warn |
| `react/no-children-prop` | warn |
| `react/no-array-index-key` | warn |
| `react/void-dom-elements-no-children` | warn |
| `react/no-redundant-should-component-update` | warn |
| `react/jsx-curly-brace-presence` | warn *(with options)* |
| `react/button-has-type` | warn *(with options)* |
| `react/no-this-in-sfc` | warn |
| `react/jsx-fragments` | warn *(with options)* |
| `react/state-in-constructor` | warn *(with options)* |
| `react/jsx-props-no-spreading` | warn *(with options)* |
| `react/jsx-no-script-url` | warn *(with options)* |
| `react/jsx-no-useless-fragment` | warn |
| `react/jsx-no-constructed-context-values` | warn |
| `react/no-namespace` | warn |
| `jsx-a11y/alt-text` | warn *(with options)* |
| `jsx-a11y/anchor-is-valid` | warn *(with options)* |
| `jsx-a11y/aria-activedescendant-has-tabindex` | warn |
| `jsx-a11y/aria-props` | warn |
| `jsx-a11y/aria-proptypes` | warn |
| `jsx-a11y/aria-role` | warn *(with options)* |
| `jsx-a11y/aria-unsupported-elements` | warn |
| `jsx-a11y/click-events-have-key-events` | warn |
| `jsx-a11y/heading-has-content` | warn *(with options)* |
| `jsx-a11y/html-has-lang` | warn |
| `jsx-a11y/iframe-has-title` | warn |
| `jsx-a11y/img-redundant-alt` | warn |
| `jsx-a11y/label-has-associated-control` | warn *(with options)* |
| `jsx-a11y/lang` | warn |
| `jsx-a11y/media-has-caption` | warn *(with options)* |
| `jsx-a11y/mouse-events-have-key-events` | warn |
| `jsx-a11y/no-access-key` | warn |
| `jsx-a11y/no-autofocus` | warn *(with options)* |
| `jsx-a11y/no-distracting-elements` | warn *(with options)* |
| `jsx-a11y/no-noninteractive-tabindex` | warn *(with options)* |
| `jsx-a11y/no-redundant-roles` | warn |
| `jsx-a11y/no-static-element-interactions` | warn *(with options)* |
| `jsx-a11y/role-has-required-aria-props` | warn |
| `jsx-a11y/role-supports-aria-props` | warn |
| `jsx-a11y/scope` | warn |
| `jsx-a11y/tabindex-no-positive` | warn |

</details>

<details>
<summary>3 rules migrated without options (incompatible schema)</summary>

These rules are enabled but their configuration options were dropped because oxlint's schema does not accept them. Only the severity level was kept.

`import/no-cycle`, `jsx-a11y/anchor-has-content`, `react/jsx-no-duplicate-props`

</details>

<details>
<summary>135 rules have no oxlint equivalent</summary>

**Not portable to oxlint**

`consistent-return`, `dot-notation`, `dot-location`, `no-floating-decimal`, `no-multi-spaces`, `no-octal`, `no-octal-escape`, `no-return-await`, `wrap-iife`, `no-dupe-args`, `no-extra-semi`, `global-require`, `no-buffer-constructor`, `no-new-require`, `no-path-concat`, `array-bracket-spacing`, `block-spacing`, `brace-style`, `camelcase`, `comma-dangle`, `comma-spacing`, `comma-style`, `computed-property-spacing`, `eol-last`, `function-call-argument-newline`, `func-call-spacing`, `function-paren-newline`, `implicit-arrow-linebreak`, `indent`, `jsx-quotes`, `key-spacing`, `keyword-spacing`, `linebreak-style`, `lines-between-class-members`, `lines-around-directive`, `max-len`, `new-parens`, `newline-per-chained-call`, `no-mixed-operators`, `no-mixed-spaces-and-tabs`, `no-multiple-empty-lines`, `no-new-object`, `no-spaced-func`, `no-tabs`, `no-trailing-spaces`, `no-whitespace-before-property`, `nonblock-statement-body-position`, `object-curly-spacing`, `object-curly-newline`, `object-property-newline`, `one-var-declaration-per-line`, `operator-linebreak`, `padded-blocks`, `quote-props`, `quotes`, `semi`, `semi-spacing`, `semi-style`, `space-before-blocks`, `space-before-function-paren`, `space-in-parens`, `space-infix-ops`, `space-unary-ops`, `spaced-comment`, `switch-colon-spacing`, `template-tag-spacing`, `no-undef-init`, `arrow-parens`, `arrow-spacing`, `generator-star-spacing`, `no-confusing-arrow`, `no-new-symbol`, `rest-spread-spacing`, `template-curly-spacing`, `yield-star-spacing`, `import/no-unresolved`, `import/order`, `react/forbid-prop-types`, `react/jsx-closing-bracket-location`, `react/jsx-closing-tag-location`, `react/jsx-curly-spacing`, `react/jsx-indent-props`, `react/jsx-max-props-per-line`, `react/jsx-uses-react`, `react/jsx-uses-vars`, `react/sort-comp`, `react/jsx-wrap-multilines`, `react/jsx-first-prop-new-line`, `react/jsx-equals-spacing`, `react/jsx-indent`, `react/no-unused-prop-types`, `react/jsx-tag-spacing`, `react/forbid-foreign-prop-types`, `react/default-props-match-prop-types`, `react/no-unused-state`, `react/jsx-one-expression-per-line`, `react/no-access-state-in-setstate`, `react/jsx-props-no-multi-spaces`, `react/jsx-curly-newline`, `react/static-property-placement`, `react/prefer-exact-props`, `react/no-unused-class-component-methods`

**Not yet implemented in oxlint**

`no-implied-eval`, `no-restricted-properties`, `prefer-regex-literals`, `no-unreachable-loop`, `no-restricted-syntax`, `no-underscore-dangle`, `one-var`, `no-restricted-exports`, `object-shorthand`, `prefer-arrow-callback`, `import/no-extraneous-dependencies`, `import/newline-after-import`, `import/no-useless-path-segments`, `import/no-import-module-exports`, `import/no-relative-packages`, `strict`, `react/jsx-no-bind`, `react/no-deprecated`, `react/no-did-update-set-state`, `react/prefer-stateless-function`, `react/prop-types`, `react/require-default-props`, `react/no-typos`, `react/destructuring-assignment`, `react/function-component-definition`, `react/no-unstable-nested-components`, `react/no-arrow-function-lifecycle`, `react/no-invalid-html-attribute`, `jsx-a11y/control-has-associated-label`, `jsx-a11y/interactive-supports-focus`, `jsx-a11y/no-interactive-element-to-noninteractive-role`, `jsx-a11y/no-noninteractive-element-interactions`, `jsx-a11y/no-noninteractive-element-to-interactive-role`

</details>

### `oxlint-config-presets/standard`

<details>
<summary>98 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-var` | warn |
| `accessor-pairs` | error *(with options)* |
| `array-callback-return` | error *(with options)* |
| `constructor-super` | error |
| `curly` | error *(with options)* |
| `default-case-last` | error |
| `eqeqeq` | error *(with options)* |
| `new-cap` | error *(with options)* |
| `no-array-constructor` | error |
| `no-async-promise-executor` | error |
| `no-caller` | error |
| `no-case-declarations` | error |
| `no-class-assign` | error |
| `no-compare-neg-zero` | error |
| `no-cond-assign` | error |
| `no-const-assign` | error |
| `no-constant-condition` | error *(with options)* |
| `no-control-regex` | error |
| `no-debugger` | error |
| `no-delete-var` | error |
| `no-dupe-class-members` | error |
| `no-dupe-keys` | error |
| `no-duplicate-case` | error |
| `no-useless-backreference` | error |
| `no-empty` | error *(with options)* |
| `no-empty-character-class` | error |
| `no-empty-pattern` | error |
| `no-eval` | error |
| `no-ex-assign` | error |
| `no-extend-native` | error |
| `no-extra-bind` | error |
| `no-extra-boolean-cast` | error |
| `no-fallthrough` | error |
| `no-func-assign` | error |
| `no-global-assign` | error |
| `no-import-assign` | error |
| `no-invalid-regexp` | error |
| `no-irregular-whitespace` | error |
| `no-iterator` | error |
| `no-labels` | error *(with options)* |
| `no-lone-blocks` | error |
| `no-loss-of-precision` | error |
| `no-misleading-character-class` | error |
| `no-prototype-builtins` | error |
| `no-useless-catch` | error |
| `no-multi-str` | error |
| `no-new` | error |
| `no-new-func` | error |
| `no-new-wrappers` | error |
| `no-obj-calls` | error |
| `no-proto` | error |
| `no-redeclare` | error *(with options)* |
| `no-regex-spaces` | error |
| `no-return-assign` | error *(with options)* |
| `no-self-assign` | error *(with options)* |
| `no-self-compare` | error |
| `no-sequences` | error |
| `no-shadow-restricted-names` | error |
| `no-sparse-arrays` | error |
| `no-template-curly-in-string` | error |
| `no-this-before-super` | error |
| `no-throw-literal` | error |
| `no-undef` | error |
| `no-unexpected-multiline` | error |
| `no-unmodified-loop-condition` | error |
| `no-unneeded-ternary` | error *(with options)* |
| `no-unreachable` | error |
| `no-unsafe-finally` | error |
| `no-unsafe-negation` | error |
| `no-unused-expressions` | error *(with options)* |
| `no-unused-vars` | error *(with options)* |
| `no-use-before-define` | error *(with options)* |
| `no-useless-call` | error |
| `no-useless-computed-key` | error |
| `no-useless-constructor` | error |
| `no-useless-escape` | error |
| `no-useless-rename` | error |
| `no-useless-return` | error |
| `no-void` | error |
| `no-with` | error |
| `prefer-const` | error *(with options)* |
| `prefer-promise-reject-errors` | error |
| `symbol-description` | error |
| `unicode-bom` | error *(with options)* |
| `use-isnan` | error *(with options)* |
| `valid-typeof` | error *(with options)* |
| `yoda` | error *(with options)* |
| `import/export` | error |
| `import/first` | error |
| `import/no-absolute-path` | error *(with options)* |
| `import/no-duplicates` | error |
| `import/no-named-default` | error |
| `import/no-webpack-loader-syntax` | error |
| `promise/param-names` | error |
| `node/handle-callback-err` | error *(with options)* |
| `node/no-exports-assign` | error |
| `node/no-new-require` | error |
| `node/no-path-concat` | error |

</details>

<details>
<summary>63 rules have no oxlint equivalent</summary>

**Not yet implemented in oxlint**

`object-shorthand`, `no-implied-eval`, `no-unreachable-loop`, `one-var`, `prefer-regex-literals`, `n/no-callback-literal`, `n/no-deprecated-api`, `n/process-exit-as-throw`

**Not portable to oxlint**

`array-bracket-spacing`, `arrow-spacing`, `block-spacing`, `brace-style`, `camelcase`, `comma-dangle`, `comma-spacing`, `comma-style`, `computed-property-spacing`, `dot-location`, `dot-notation`, `eol-last`, `func-call-spacing`, `generator-star-spacing`, `indent`, `key-spacing`, `keyword-spacing`, `lines-between-class-members`, `multiline-ternary`, `new-parens`, `no-dupe-args`, `no-extra-parens`, `no-floating-decimal`, `no-mixed-operators`, `no-mixed-spaces-and-tabs`, `no-multi-spaces`, `no-multiple-empty-lines`, `no-new-object`, `no-new-symbol`, `no-octal`, `no-octal-escape`, `no-tabs`, `no-trailing-spaces`, `no-undef-init`, `no-whitespace-before-property`, `object-curly-newline`, `object-curly-spacing`, `object-property-newline`, `operator-linebreak`, `padded-blocks`, `quote-props`, `quotes`, `rest-spread-spacing`, `semi`, `semi-spacing`, `space-before-blocks`, `space-before-function-paren`, `space-in-parens`, `space-infix-ops`, `space-unary-ops`, `spaced-comment`, `template-curly-spacing`, `template-tag-spacing`, `wrap-iife`, `yield-star-spacing`

</details>

### `oxlint-config-presets/google`

<details>
<summary>21 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-irregular-whitespace` | error |
| `no-unexpected-multiline` | error |
| `curly` | error *(with options)* |
| `guard-for-in` | error |
| `no-caller` | error |
| `no-extend-native` | error |
| `no-extra-bind` | error |
| `no-multi-str` | error |
| `no-new-wrappers` | error |
| `no-throw-literal` | error |
| `no-with` | error |
| `prefer-promise-reject-errors` | error |
| `no-unused-vars` | error *(with options)* |
| `new-cap` | error |
| `no-array-constructor` | error |
| `constructor-super` | error |
| `no-this-before-super` | error |
| `no-var` | error |
| `prefer-const` | error *(with options)* |
| `prefer-rest-params` | error |
| `prefer-spread` | error |

</details>

<details>
<summary>41 rules have no oxlint equivalent</summary>

**Not yet implemented in oxlint**

`valid-jsdoc`, `one-var`, `require-jsdoc`

**Not portable to oxlint**

`no-invalid-this`, `no-multi-spaces`, `array-bracket-spacing`, `block-spacing`, `brace-style`, `camelcase`, `comma-dangle`, `comma-spacing`, `comma-style`, `computed-property-spacing`, `eol-last`, `func-call-spacing`, `indent`, `key-spacing`, `keyword-spacing`, `linebreak-style`, `max-len`, `no-mixed-spaces-and-tabs`, `no-multiple-empty-lines`, `no-new-object`, `no-tabs`, `no-trailing-spaces`, `object-curly-spacing`, `operator-linebreak`, `padded-blocks`, `quote-props`, `quotes`, `semi`, `semi-spacing`, `space-before-blocks`, `space-before-function-paren`, `spaced-comment`, `switch-colon-spacing`, `arrow-parens`, `generator-star-spacing`, `no-new-symbol`, `rest-spread-spacing`, `yield-star-spacing`

</details>

### `oxlint-config-presets/typescript-eslint/recommended`

<details>
<summary>24 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-var` | error |
| `prefer-const` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `@typescript-eslint/ban-ts-comment` | error |
| `no-array-constructor` | error |
| `@typescript-eslint/no-duplicate-enum-values` | error |
| `@typescript-eslint/no-empty-object-type` | error |
| `@typescript-eslint/no-explicit-any` | error |
| `@typescript-eslint/no-extra-non-null-assertion` | error |
| `@typescript-eslint/no-misused-new` | error |
| `@typescript-eslint/no-namespace` | error |
| `@typescript-eslint/no-non-null-asserted-optional-chain` | error |
| `@typescript-eslint/no-require-imports` | error |
| `@typescript-eslint/no-this-alias` | error |
| `@typescript-eslint/no-unnecessary-type-constraint` | error |
| `@typescript-eslint/no-unsafe-declaration-merging` | error |
| `@typescript-eslint/no-unsafe-function-type` | error |
| `no-unused-expressions` | error |
| `no-unused-vars` | error |
| `@typescript-eslint/no-wrapper-object-types` | error |
| `@typescript-eslint/prefer-as-const` | error |
| `@typescript-eslint/prefer-namespace-keyword` | error |
| `@typescript-eslint/triple-slash-reference` | error |

</details>

### `oxlint-config-presets/typescript-eslint/recommended-type-checked`

<details>
<summary>24 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-var` | error |
| `prefer-const` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `@typescript-eslint/ban-ts-comment` | error |
| `no-array-constructor` | error |
| `@typescript-eslint/no-duplicate-enum-values` | error |
| `@typescript-eslint/no-empty-object-type` | error |
| `@typescript-eslint/no-explicit-any` | error |
| `@typescript-eslint/no-extra-non-null-assertion` | error |
| `@typescript-eslint/no-misused-new` | error |
| `@typescript-eslint/no-namespace` | error |
| `@typescript-eslint/no-non-null-asserted-optional-chain` | error |
| `@typescript-eslint/no-require-imports` | error |
| `@typescript-eslint/no-this-alias` | error |
| `@typescript-eslint/no-unnecessary-type-constraint` | error |
| `@typescript-eslint/no-unsafe-declaration-merging` | error |
| `@typescript-eslint/no-unsafe-function-type` | error |
| `no-unused-expressions` | error |
| `no-unused-vars` | error |
| `@typescript-eslint/no-wrapper-object-types` | error |
| `@typescript-eslint/prefer-as-const` | error |
| `@typescript-eslint/prefer-namespace-keyword` | error |
| `@typescript-eslint/triple-slash-reference` | error |

</details>

<details>
<summary>23 rules have no oxlint equivalent</summary>

**Require type-aware linting**

`@typescript-eslint/await-thenable`, `@typescript-eslint/no-array-delete`, `@typescript-eslint/no-base-to-string`, `@typescript-eslint/no-duplicate-type-constituents`, `@typescript-eslint/no-floating-promises`, `@typescript-eslint/no-for-in-array`, `@typescript-eslint/no-implied-eval`, `@typescript-eslint/no-misused-promises`, `@typescript-eslint/no-redundant-type-constituents`, `@typescript-eslint/no-unnecessary-type-assertion`, `@typescript-eslint/no-unsafe-argument`, `@typescript-eslint/no-unsafe-assignment`, `@typescript-eslint/no-unsafe-call`, `@typescript-eslint/no-unsafe-enum-comparison`, `@typescript-eslint/no-unsafe-member-access`, `@typescript-eslint/no-unsafe-return`, `@typescript-eslint/no-unsafe-unary-minus`, `@typescript-eslint/only-throw-error`, `@typescript-eslint/prefer-promise-reject-errors`, `@typescript-eslint/require-await`, `@typescript-eslint/restrict-plus-operands`, `@typescript-eslint/restrict-template-expressions`, `@typescript-eslint/unbound-method`

</details>

### `oxlint-config-presets/typescript-eslint/strict`

<details>
<summary>32 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-var` | error |
| `prefer-const` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `@typescript-eslint/ban-ts-comment` | error *(with options)* |
| `no-array-constructor` | error |
| `@typescript-eslint/no-duplicate-enum-values` | error |
| `@typescript-eslint/no-dynamic-delete` | error |
| `@typescript-eslint/no-empty-object-type` | error |
| `@typescript-eslint/no-explicit-any` | error |
| `@typescript-eslint/no-extra-non-null-assertion` | error |
| `@typescript-eslint/no-extraneous-class` | error |
| `@typescript-eslint/no-invalid-void-type` | error |
| `@typescript-eslint/no-misused-new` | error |
| `@typescript-eslint/no-namespace` | error |
| `@typescript-eslint/no-non-null-asserted-nullish-coalescing` | error |
| `@typescript-eslint/no-non-null-asserted-optional-chain` | error |
| `@typescript-eslint/no-non-null-assertion` | error |
| `@typescript-eslint/no-require-imports` | error |
| `@typescript-eslint/no-this-alias` | error |
| `@typescript-eslint/no-unnecessary-type-constraint` | error |
| `@typescript-eslint/no-unsafe-declaration-merging` | error |
| `@typescript-eslint/no-unsafe-function-type` | error |
| `no-unused-expressions` | error |
| `no-unused-vars` | error |
| `no-useless-constructor` | error |
| `@typescript-eslint/no-wrapper-object-types` | error |
| `@typescript-eslint/prefer-as-const` | error |
| `@typescript-eslint/prefer-literal-enum-member` | error |
| `@typescript-eslint/prefer-namespace-keyword` | error |
| `@typescript-eslint/triple-slash-reference` | error |
| `@typescript-eslint/unified-signatures` | error |

</details>

### `oxlint-config-presets/typescript-eslint/strict-type-checked`

<details>
<summary>32 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-var` | error |
| `prefer-const` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `@typescript-eslint/ban-ts-comment` | error *(with options)* |
| `no-array-constructor` | error |
| `@typescript-eslint/no-duplicate-enum-values` | error |
| `@typescript-eslint/no-dynamic-delete` | error |
| `@typescript-eslint/no-empty-object-type` | error |
| `@typescript-eslint/no-explicit-any` | error |
| `@typescript-eslint/no-extra-non-null-assertion` | error |
| `@typescript-eslint/no-extraneous-class` | error |
| `@typescript-eslint/no-invalid-void-type` | error |
| `@typescript-eslint/no-misused-new` | error |
| `@typescript-eslint/no-namespace` | error |
| `@typescript-eslint/no-non-null-asserted-nullish-coalescing` | error |
| `@typescript-eslint/no-non-null-asserted-optional-chain` | error |
| `@typescript-eslint/no-non-null-assertion` | error |
| `@typescript-eslint/no-require-imports` | error |
| `@typescript-eslint/no-this-alias` | error |
| `@typescript-eslint/no-unnecessary-type-constraint` | error |
| `@typescript-eslint/no-unsafe-declaration-merging` | error |
| `@typescript-eslint/no-unsafe-function-type` | error |
| `no-unused-expressions` | error |
| `no-unused-vars` | error |
| `no-useless-constructor` | error |
| `@typescript-eslint/no-wrapper-object-types` | error |
| `@typescript-eslint/prefer-as-const` | error |
| `@typescript-eslint/prefer-literal-enum-member` | error |
| `@typescript-eslint/prefer-namespace-keyword` | error |
| `@typescript-eslint/triple-slash-reference` | error |
| `@typescript-eslint/unified-signatures` | error |

</details>

<details>
<summary>40 rules have no oxlint equivalent</summary>

**Require type-aware linting**

`@typescript-eslint/await-thenable`, `@typescript-eslint/no-array-delete`, `@typescript-eslint/no-base-to-string`, `@typescript-eslint/no-confusing-void-expression`, `@typescript-eslint/no-deprecated`, `@typescript-eslint/no-duplicate-type-constituents`, `@typescript-eslint/no-floating-promises`, `@typescript-eslint/no-for-in-array`, `@typescript-eslint/no-implied-eval`, `@typescript-eslint/no-meaningless-void-operator`, `@typescript-eslint/no-misused-promises`, `@typescript-eslint/no-misused-spread`, `@typescript-eslint/no-mixed-enums`, `@typescript-eslint/no-redundant-type-constituents`, `@typescript-eslint/no-unnecessary-boolean-literal-compare`, `@typescript-eslint/no-unnecessary-condition`, `@typescript-eslint/no-unnecessary-template-expression`, `@typescript-eslint/no-unnecessary-type-arguments`, `@typescript-eslint/no-unnecessary-type-assertion`, `@typescript-eslint/no-unnecessary-type-conversion`, `@typescript-eslint/no-unnecessary-type-parameters`, `@typescript-eslint/no-unsafe-argument`, `@typescript-eslint/no-unsafe-assignment`, `@typescript-eslint/no-unsafe-call`, `@typescript-eslint/no-unsafe-enum-comparison`, `@typescript-eslint/no-unsafe-member-access`, `@typescript-eslint/no-unsafe-return`, `@typescript-eslint/no-unsafe-unary-minus`, `@typescript-eslint/no-useless-default-assignment`, `@typescript-eslint/only-throw-error`, `@typescript-eslint/prefer-promise-reject-errors`, `@typescript-eslint/prefer-reduce-type-parameter`, `@typescript-eslint/prefer-return-this-type`, `@typescript-eslint/related-getter-setter-pairs`, `@typescript-eslint/require-await`, `@typescript-eslint/restrict-plus-operands`, `@typescript-eslint/restrict-template-expressions`, `@typescript-eslint/return-await`, `@typescript-eslint/unbound-method`, `@typescript-eslint/use-unknown-in-catch-callback-variable`

</details>

### `oxlint-config-presets/typescript-eslint/stylistic`

<details>
<summary>17 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-var` | error |
| `prefer-const` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `@typescript-eslint/adjacent-overload-signatures` | error |
| `@typescript-eslint/array-type` | error |
| `@typescript-eslint/ban-tslint-comment` | error |
| `@typescript-eslint/class-literal-property-style` | error |
| `@typescript-eslint/consistent-generic-constructors` | error |
| `@typescript-eslint/consistent-indexed-object-style` | error |
| `@typescript-eslint/consistent-type-assertions` | error |
| `@typescript-eslint/consistent-type-definitions` | error |
| `@typescript-eslint/no-confusing-non-null-assertion` | error |
| `no-empty-function` | error |
| `@typescript-eslint/no-inferrable-types` | error |
| `@typescript-eslint/prefer-for-of` | error |
| `@typescript-eslint/prefer-function-type` | error |

</details>

### `oxlint-config-presets/typescript-eslint/stylistic-type-checked`

<details>
<summary>17 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-var` | error |
| `prefer-const` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `@typescript-eslint/adjacent-overload-signatures` | error |
| `@typescript-eslint/array-type` | error |
| `@typescript-eslint/ban-tslint-comment` | error |
| `@typescript-eslint/class-literal-property-style` | error |
| `@typescript-eslint/consistent-generic-constructors` | error |
| `@typescript-eslint/consistent-indexed-object-style` | error |
| `@typescript-eslint/consistent-type-assertions` | error |
| `@typescript-eslint/consistent-type-definitions` | error |
| `@typescript-eslint/no-confusing-non-null-assertion` | error |
| `no-empty-function` | error |
| `@typescript-eslint/no-inferrable-types` | error |
| `@typescript-eslint/prefer-for-of` | error |
| `@typescript-eslint/prefer-function-type` | error |

</details>

<details>
<summary>8 rules have no oxlint equivalent</summary>

**Require type-aware linting**

`@typescript-eslint/dot-notation`, `@typescript-eslint/non-nullable-type-assertion-style`, `@typescript-eslint/prefer-find`, `@typescript-eslint/prefer-includes`, `@typescript-eslint/prefer-nullish-coalescing`, `@typescript-eslint/prefer-optional-chain`, `@typescript-eslint/prefer-regexp-exec`, `@typescript-eslint/prefer-string-starts-ends-with`

</details>

### `oxlint-config-presets/typescript-eslint/all`

<details>
<summary>65 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `no-dupe-class-members` | error |
| `no-redeclare` | error |
| `no-var` | error |
| `prefer-const` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `@typescript-eslint/adjacent-overload-signatures` | error |
| `@typescript-eslint/array-type` | error |
| `@typescript-eslint/ban-ts-comment` | error |
| `@typescript-eslint/ban-tslint-comment` | error |
| `@typescript-eslint/class-literal-property-style` | error |
| `class-methods-use-this` | error |
| `@typescript-eslint/consistent-generic-constructors` | error |
| `@typescript-eslint/consistent-indexed-object-style` | error |
| `@typescript-eslint/consistent-type-assertions` | error |
| `@typescript-eslint/consistent-type-definitions` | error |
| `@typescript-eslint/consistent-type-imports` | error |
| `default-param-last` | error |
| `@typescript-eslint/explicit-function-return-type` | error |
| `@typescript-eslint/explicit-module-boundary-types` | error |
| `init-declarations` | error |
| `max-params` | error |
| `no-array-constructor` | error |
| `@typescript-eslint/no-confusing-non-null-assertion` | error |
| `@typescript-eslint/no-duplicate-enum-values` | error |
| `@typescript-eslint/no-dynamic-delete` | error |
| `no-empty-function` | error |
| `@typescript-eslint/no-empty-object-type` | error |
| `@typescript-eslint/no-explicit-any` | error |
| `@typescript-eslint/no-extra-non-null-assertion` | error |
| `@typescript-eslint/no-extraneous-class` | error |
| `@typescript-eslint/no-import-type-side-effects` | error |
| `@typescript-eslint/no-inferrable-types` | error |
| `@typescript-eslint/no-invalid-void-type` | error |
| `no-loop-func` | error |
| `no-magic-numbers` | error |
| `@typescript-eslint/no-misused-new` | error |
| `@typescript-eslint/no-namespace` | error |
| `@typescript-eslint/no-non-null-asserted-nullish-coalescing` | error |
| `@typescript-eslint/no-non-null-asserted-optional-chain` | error |
| `@typescript-eslint/no-non-null-assertion` | error |
| `@typescript-eslint/no-require-imports` | error |
| `no-restricted-imports` | error |
| `@typescript-eslint/no-restricted-types` | error |
| `no-shadow` | error |
| `@typescript-eslint/no-this-alias` | error |
| `@typescript-eslint/no-unnecessary-parameter-property-assignment` | error |
| `@typescript-eslint/no-unnecessary-type-constraint` | error |
| `@typescript-eslint/no-unsafe-declaration-merging` | error |
| `@typescript-eslint/no-unsafe-function-type` | error |
| `no-unused-expressions` | error |
| `no-unused-vars` | error |
| `no-use-before-define` | error |
| `no-useless-constructor` | error |
| `@typescript-eslint/no-useless-empty-export` | error |
| `@typescript-eslint/no-wrapper-object-types` | error |
| `@typescript-eslint/parameter-properties` | error |
| `@typescript-eslint/prefer-as-const` | error |
| `@typescript-eslint/prefer-enum-initializers` | error |
| `@typescript-eslint/prefer-for-of` | error |
| `@typescript-eslint/prefer-function-type` | error |
| `@typescript-eslint/prefer-literal-enum-member` | error |
| `@typescript-eslint/prefer-namespace-keyword` | error |
| `@typescript-eslint/triple-slash-reference` | error |
| `@typescript-eslint/unified-signatures` | error |

</details>

<details>
<summary>66 rules have no oxlint equivalent</summary>

**Not yet implemented in oxlint**

`@typescript-eslint/explicit-member-accessibility`, `@typescript-eslint/member-ordering`, `@typescript-eslint/method-signature-style`, `@typescript-eslint/naming-convention`, `@typescript-eslint/no-unused-private-class-members`, `@typescript-eslint/prefer-destructuring`

**Not portable to oxlint**

`@typescript-eslint/no-invalid-this`

**Require type-aware linting**

`@typescript-eslint/await-thenable`, `@typescript-eslint/consistent-return`, `@typescript-eslint/consistent-type-exports`, `@typescript-eslint/dot-notation`, `@typescript-eslint/no-array-delete`, `@typescript-eslint/no-base-to-string`, `@typescript-eslint/no-confusing-void-expression`, `@typescript-eslint/no-deprecated`, `@typescript-eslint/no-duplicate-type-constituents`, `@typescript-eslint/no-floating-promises`, `@typescript-eslint/no-for-in-array`, `@typescript-eslint/no-implied-eval`, `@typescript-eslint/no-meaningless-void-operator`, `@typescript-eslint/no-misused-promises`, `@typescript-eslint/no-misused-spread`, `@typescript-eslint/no-mixed-enums`, `@typescript-eslint/no-redundant-type-constituents`, `@typescript-eslint/no-unnecessary-boolean-literal-compare`, `@typescript-eslint/no-unnecessary-condition`, `@typescript-eslint/no-unnecessary-qualifier`, `@typescript-eslint/no-unnecessary-template-expression`, `@typescript-eslint/no-unnecessary-type-arguments`, `@typescript-eslint/no-unnecessary-type-assertion`, `@typescript-eslint/no-unnecessary-type-conversion`, `@typescript-eslint/no-unnecessary-type-parameters`, `@typescript-eslint/no-unsafe-argument`, `@typescript-eslint/no-unsafe-assignment`, `@typescript-eslint/no-unsafe-call`, `@typescript-eslint/no-unsafe-enum-comparison`, `@typescript-eslint/no-unsafe-member-access`, `@typescript-eslint/no-unsafe-return`, `@typescript-eslint/no-unsafe-type-assertion`, `@typescript-eslint/no-unsafe-unary-minus`, `@typescript-eslint/no-useless-default-assignment`, `@typescript-eslint/non-nullable-type-assertion-style`, `@typescript-eslint/only-throw-error`, `@typescript-eslint/prefer-find`, `@typescript-eslint/prefer-includes`, `@typescript-eslint/prefer-nullish-coalescing`, `@typescript-eslint/prefer-optional-chain`, `@typescript-eslint/prefer-promise-reject-errors`, `@typescript-eslint/prefer-readonly`, `@typescript-eslint/prefer-readonly-parameter-types`, `@typescript-eslint/prefer-reduce-type-parameter`, `@typescript-eslint/prefer-regexp-exec`, `@typescript-eslint/prefer-return-this-type`, `@typescript-eslint/prefer-string-starts-ends-with`, `@typescript-eslint/promise-function-async`, `@typescript-eslint/related-getter-setter-pairs`, `@typescript-eslint/require-array-sort-compare`, `@typescript-eslint/require-await`, `@typescript-eslint/restrict-plus-operands`, `@typescript-eslint/restrict-template-expressions`, `@typescript-eslint/return-await`, `@typescript-eslint/strict-boolean-expressions`, `@typescript-eslint/strict-void-return`, `@typescript-eslint/switch-exhaustiveness-check`, `@typescript-eslint/unbound-method`, `@typescript-eslint/use-unknown-in-catch-callback-variable`

</details>

### `oxlint-config-presets/eslint-js/recommended`

<details>
<summary>61 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `constructor-super` | error |
| `for-direction` | error |
| `getter-return` | error |
| `no-async-promise-executor` | error |
| `no-case-declarations` | error |
| `no-class-assign` | error |
| `no-compare-neg-zero` | error |
| `no-cond-assign` | error |
| `no-const-assign` | error |
| `no-constant-binary-expression` | error |
| `no-constant-condition` | error |
| `no-control-regex` | error |
| `no-debugger` | error |
| `no-delete-var` | error |
| `no-dupe-class-members` | error |
| `no-dupe-else-if` | error |
| `no-dupe-keys` | error |
| `no-duplicate-case` | error |
| `no-empty` | error |
| `no-empty-character-class` | error |
| `no-empty-pattern` | error |
| `no-empty-static-block` | error |
| `no-ex-assign` | error |
| `no-extra-boolean-cast` | error |
| `no-fallthrough` | error |
| `no-func-assign` | error |
| `no-global-assign` | error |
| `no-import-assign` | error |
| `no-invalid-regexp` | error |
| `no-irregular-whitespace` | error |
| `no-loss-of-precision` | error |
| `no-misleading-character-class` | error |
| `no-new-native-nonconstructor` | error |
| `no-nonoctal-decimal-escape` | error |
| `no-obj-calls` | error |
| `no-prototype-builtins` | error |
| `no-redeclare` | error |
| `no-regex-spaces` | error |
| `no-self-assign` | error |
| `no-setter-return` | error |
| `no-shadow-restricted-names` | error |
| `no-sparse-arrays` | error |
| `no-this-before-super` | error |
| `no-unassigned-vars` | error |
| `no-undef` | error |
| `no-unexpected-multiline` | error |
| `no-unreachable` | error |
| `no-unsafe-finally` | error |
| `no-unsafe-negation` | error |
| `no-unsafe-optional-chaining` | error |
| `no-unused-labels` | error |
| `no-unused-private-class-members` | error |
| `no-unused-vars` | error |
| `no-useless-backreference` | error |
| `no-useless-catch` | error |
| `no-useless-escape` | error |
| `no-with` | error |
| `preserve-caught-error` | error |
| `require-yield` | error |
| `use-isnan` | error |
| `valid-typeof` | error |

</details>

<details>
<summary>3 rules have no oxlint equivalent</summary>

**Not portable to oxlint**

`no-dupe-args`, `no-octal`

**Not yet implemented in oxlint**

`no-useless-assignment`

</details>

### `oxlint-config-presets/eslint-js/all`

<details>
<summary>169 rules successfully migrated</summary>

| Rule | Severity |
|---|---|
| `accessor-pairs` | error |
| `array-callback-return` | error |
| `arrow-body-style` | error |
| `block-scoped-var` | error |
| `capitalized-comments` | error |
| `class-methods-use-this` | error |
| `complexity` | error |
| `constructor-super` | error |
| `curly` | error |
| `default-case` | error |
| `default-case-last` | error |
| `default-param-last` | error |
| `eqeqeq` | error |
| `for-direction` | error |
| `func-names` | error |
| `func-style` | error |
| `getter-return` | error |
| `grouped-accessor-pairs` | error |
| `guard-for-in` | error |
| `id-length` | error |
| `init-declarations` | error |
| `max-classes-per-file` | error |
| `max-depth` | error |
| `max-lines` | error |
| `max-lines-per-function` | error |
| `max-nested-callbacks` | error |
| `max-params` | error |
| `max-statements` | error |
| `new-cap` | error |
| `no-alert` | error |
| `no-array-constructor` | error |
| `no-async-promise-executor` | error |
| `no-await-in-loop` | error |
| `no-bitwise` | error |
| `no-caller` | error |
| `no-case-declarations` | error |
| `no-class-assign` | error |
| `no-compare-neg-zero` | error |
| `no-cond-assign` | error |
| `no-console` | error |
| `no-const-assign` | error |
| `no-constant-binary-expression` | error |
| `no-constant-condition` | error |
| `no-constructor-return` | error |
| `no-continue` | error |
| `no-control-regex` | error |
| `no-debugger` | error |
| `no-delete-var` | error |
| `no-div-regex` | error |
| `no-dupe-class-members` | error |
| `no-dupe-else-if` | error |
| `no-dupe-keys` | error |
| `no-duplicate-case` | error |
| `no-duplicate-imports` | error |
| `no-else-return` | error |
| `no-empty` | error |
| `no-empty-character-class` | error |
| `no-empty-function` | error |
| `no-empty-pattern` | error |
| `no-empty-static-block` | error |
| `no-eq-null` | error |
| `no-eval` | error |
| `no-ex-assign` | error |
| `no-extend-native` | error |
| `no-extra-bind` | error |
| `no-extra-boolean-cast` | error |
| `no-extra-label` | error |
| `no-fallthrough` | error |
| `no-func-assign` | error |
| `no-global-assign` | error |
| `no-implicit-coercion` | error |
| `no-import-assign` | error |
| `no-inline-comments` | error |
| `no-inner-declarations` | error |
| `no-invalid-regexp` | error |
| `no-irregular-whitespace` | error |
| `no-iterator` | error |
| `no-label-var` | error |
| `no-labels` | error |
| `no-lone-blocks` | error |
| `no-lonely-if` | error |
| `no-loop-func` | error |
| `no-loss-of-precision` | error |
| `no-magic-numbers` | error |
| `no-misleading-character-class` | error |
| `no-multi-assign` | error |
| `no-multi-str` | error |
| `no-negated-condition` | error |
| `no-nested-ternary` | error |
| `no-new` | error |
| `no-new-func` | error |
| `no-new-native-nonconstructor` | error |
| `no-new-wrappers` | error |
| `no-nonoctal-decimal-escape` | error |
| `no-obj-calls` | error |
| `no-object-constructor` | error |
| `no-param-reassign` | error |
| `no-plusplus` | error |
| `no-promise-executor-return` | error |
| `no-proto` | error |
| `no-prototype-builtins` | error |
| `no-redeclare` | error |
| `no-regex-spaces` | error |
| `no-restricted-globals` | error |
| `no-restricted-imports` | error |
| `no-return-assign` | error |
| `no-script-url` | error |
| `no-self-assign` | error |
| `no-self-compare` | error |
| `no-sequences` | error |
| `no-setter-return` | error |
| `no-shadow` | error |
| `no-shadow-restricted-names` | error |
| `no-sparse-arrays` | error |
| `no-template-curly-in-string` | error |
| `no-ternary` | error |
| `no-this-before-super` | error |
| `no-throw-literal` | error |
| `no-unassigned-vars` | error |
| `no-undef` | error |
| `no-undefined` | error |
| `no-unexpected-multiline` | error |
| `no-unmodified-loop-condition` | error |
| `no-unneeded-ternary` | error |
| `no-unreachable` | error |
| `no-unsafe-finally` | error |
| `no-unsafe-negation` | error |
| `no-unsafe-optional-chaining` | error |
| `no-unused-expressions` | error |
| `no-unused-labels` | error |
| `no-unused-private-class-members` | error |
| `no-unused-vars` | error |
| `no-use-before-define` | error |
| `no-useless-backreference` | error |
| `no-useless-call` | error |
| `no-useless-catch` | error |
| `no-useless-computed-key` | error |
| `no-useless-concat` | error |
| `no-useless-constructor` | error |
| `no-useless-escape` | error |
| `no-useless-rename` | error |
| `no-useless-return` | error |
| `no-var` | error |
| `no-void` | error |
| `no-warning-comments` | error |
| `no-with` | error |
| `operator-assignment` | error |
| `prefer-const` | error |
| `prefer-destructuring` | error |
| `prefer-exponentiation-operator` | error |
| `prefer-numeric-literals` | error |
| `prefer-object-has-own` | error |
| `prefer-object-spread` | error |
| `prefer-promise-reject-errors` | error |
| `prefer-rest-params` | error |
| `prefer-spread` | error |
| `prefer-template` | error |
| `preserve-caught-error` | error |
| `radix` | error |
| `require-await` | error |
| `require-yield` | error |
| `sort-keys` | error |
| `sort-vars` | error |
| `symbol-description` | error |
| `unicode-bom` | error |
| `use-isnan` | error |
| `valid-typeof` | error |
| `vars-on-top` | error |
| `yoda` | error |

</details>

<details>
<summary>29 rules have no oxlint equivalent</summary>

**Not portable to oxlint**

`camelcase`, `consistent-return`, `dot-notation`, `no-dupe-args`, `no-invalid-this`, `no-octal`, `no-octal-escape`, `no-undef-init`

**Not yet implemented in oxlint**

`consistent-this`, `func-name-matching`, `id-denylist`, `id-match`, `logical-assignment-operators`, `no-implicit-globals`, `no-implied-eval`, `no-restricted-exports`, `no-restricted-properties`, `no-restricted-syntax`, `no-underscore-dangle`, `no-unreachable-loop`, `no-useless-assignment`, `object-shorthand`, `one-var`, `prefer-arrow-callback`, `prefer-named-capture-group`, `prefer-regex-literals`, `require-atomic-updates`, `require-unicode-regexp`, `strict`

</details>
