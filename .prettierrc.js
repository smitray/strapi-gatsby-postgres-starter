module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: '*.md',
      options: { parser: 'markdown' },
    },
    {
      files: '*.mdx',
      options: { parser: 'mdx' },
    },
  ],
};
