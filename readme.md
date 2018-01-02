# cpcfg

> Copy config files boilerplates to current directory

Avaliable presets & included files:

**package**

```
package.json
```

**npm**

```
.npmignore
```

**git**

```
.gitignore
.gitattributes
```

**editor**

```
.editorconfig
```

**readme**

```
readme.md
license
```

**lint**

```
.prettierrc
.eslintrc
```

**test**

```
jest.config.js
```

**compilers**

```
.babelrc
postcss.config.js
.posthtmlrc
.browserlistrc
```

**bundlers**

```
```

## Install

```
npm i -g cpcfg
```

## Usage

```bash
cpcfg <name>

```

For example:

```bash
# copy `.gitignore` and `.gitattributes`:
cpfgf git

# copy `.editorconfig`:
cpfgf editor

# copy `.editorconfig`, `.gitignore`, `.gitattributes`, `readme.md` and `license`:
cpfgf editor git readme
```
