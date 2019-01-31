module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: ['airbnb'],
  env: { 'es6': true },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-return-assign': 'off',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    amd: true,
    mocha: true,
    jest: true,
  },
};
