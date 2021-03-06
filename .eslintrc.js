module.exports = {
  // parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 1,
    'global-require': 1,
    'class-methods-use-this': 1,
    'arrow-body-style': 1,
    'comma-dangle': [2, 'always-multiline'],
    'max-len': 1,
    'linebreak-style': 0,
    'prefer-rest-params': 1,
    'guard-for-in': 1,
    'padded-blocks': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-unused-vars': 1,
    'no-underscore-dangle': 0,
    'no-restricted-syntax': 1,
    'no-lonely-if': 1,
    'no-mixed-operators': 1,
  },
  globals: {}
}
