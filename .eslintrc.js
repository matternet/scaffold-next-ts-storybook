// Ref: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'react/jsx-props-no-spreading': 'off',

    'import/no-extraneous-dependencies': [
      'error',
      {
        // Add to the following list in order to allow import of devDeps
        devDependencies: ['next.config.js', '.storybook/**', 'stories/**'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
