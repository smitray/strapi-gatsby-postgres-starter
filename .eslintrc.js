module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'airbnb-typescript',
    // 'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    // 'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: ['unicorn', 'react'],
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // Disable node protocol
    'unicorn/prefer-node-protocol': 'off',
    // Disable prefer module
    'unicorn/prefer-module': 'off',
  },
};
