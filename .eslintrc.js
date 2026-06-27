module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended', // Integrates Prettier as an ESLint rule
  ],
  rules: {
    // Override or add custom rules here
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'warn',
    'no-console': 'warn',
  },
};
