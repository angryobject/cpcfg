module.exports = {
  package: {
    package: 'package.json',
  },
  npm: {
    npmignore: '.npmignore',
  },
  git: {
    gitignore: '.gitignore',
    gitattributes: '.gitattributes',
  },
  editor: {
    editorconfig: '.editorconfig',
  },
  readme: {
    readme: 'readme.md',
    license: 'license',
  },
  lint: {
    prettier: '.prettierrc',
    prettierignore: '.prettierignore',
    eslint: '.eslintrc',
    eslintignore: '.eslintignore',
  },
  test: {
    jest: 'jest.config.js',
  },
  compilers: {
    babel: '.babelrc',
    postcss: 'postcss.config.js',
    posthtml: '.posthtmlrc',
    browserlist: '.browserlistrc',
  },
  rollup: {
    rollup: 'rollup.config.js'
  },
};
