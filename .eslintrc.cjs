/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
  plugins: ['no-relative-import-paths'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'array-callback-return': 'error',
    eqeqeq: 'error',
    'func-style': ['error', 'expression'],
    'import/named': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: '@pt/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': 'error',
    'no-dupe-else-if': 'error',
    'no-else-return': 'error',
    'no-nested-ternary': 'error',
    'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true }],
    'no-return-await': 'error',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prettier/prettier': 'error',
    'require-await': 'error',
  },
  overrides: [
    {
      files: ['src/**/*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      extends: ['plugin:astro/recommended'],
      rules: {
        'import/namespace': 'off',
        // prettier-plugin-astro handles formatting; eslint-plugin-prettier
        // cannot correctly apply the astro parser inside .astro files
        'prettier/prettier': 'off',
      },
    },
    {
      // <script> blocks inside .astro files are extracted and linted separately
      files: ['src/**/*.astro/*.js', '*.astro/*.ts'],
      env: { browser: true },
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
}
