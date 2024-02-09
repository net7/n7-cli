module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/**.spec.ts', '**/**.po.ts', '**/**.e2e-spec.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
  },
};
