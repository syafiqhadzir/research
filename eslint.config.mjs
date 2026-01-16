import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      strict: ['error', 'global'],
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
  {
    ignores: ['_site/**', 'assets/css/**', 'vendor/**'],
  },
];
