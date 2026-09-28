module.exports = {
  defaultSeverity: 'warning',
  extends: 'stylelint-config-standard-scss',
  rules: {
    'selector-class-pattern': [
      '[a-zA-Z][a-zA-Z0-9-]+(__[a-zA-Z0-9-])*',
      {
        message: 'The css class does not match the allowed pattern.',
        resolveNestedSelectors: true,
      },
    ],
    'color-named': 'never',
    'font-weight-notation': 'numeric',
    'color-no-invalid-hex': true,
    'max-nesting-depth': 6,
    'no-descending-specificity': null,
    'scss/comment-no-empty': null,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates'],
      },
    ],
  },
};
