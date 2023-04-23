import js from '@eslint/js';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: "writable",
        window: "writable"
      }
    },
    ignores: ['node_modules', 'dist'],
    files: ['src/**/*.js'],
    ...js.configs.recommended,
    rules: {
      'semi': 'error',
      'no-unused-vars': 'error',
    }
  }
]
