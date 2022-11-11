module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:@typescrpt-eslint/recommended-requiring-type-checking', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'import'],
  root: true,
  rules: {
    'react/no-unknown-property': ['error', {
      ignore: ['css']
    }]
  }
};