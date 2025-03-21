/** @type {import('prettier').Config} */

const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'strict',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 160,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

export default config;
