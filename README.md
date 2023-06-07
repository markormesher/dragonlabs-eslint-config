![CircleCI](https://img.shields.io/circleci/build/github/markormesher/dragonlabs-eslint-config)
![npm](https://img.shields.io/npm/v/@dragonlabs/eslint-config)

# @dragonlabs/eslint-config

My standard ESLint/Prettier config for TypeScript/React/SCSS projects. Published as its own package to reduce duplication between projects.

## Installation and Usage

Install with yarn:

```shell
yarn add --dev @dragonlabs/eslint-config
```

Add it to `.eslintrc.json`:

```json
{
  "extends": "@dragonlabs/eslint-config"
}
```

### Dependencies

These are peer dependencies, expected to be installed in the project but not provided by this package.

- [Prettier](https://www.npmjs.com/package/prettier) @ ^2.3.2
- [ESLint](https://www.npmjs.com/package/eslint) @ ^7.0.0
- [TypeScript](https://www.npmjs.com/package/typescript) @ >=3.3.1, <5.1.0

## Why "dragonlabs"?

It was late and I needed a name. DragonLabs is a reference to an old project and was the first thing that came to mind.
