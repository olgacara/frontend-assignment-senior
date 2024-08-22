# Typescript Template

Use this repo as a template for typescript projects like shared libraries.

## Commands available

- build
- watch
- lint
- test


## Formatting and linting

The repo should be set up with using the `@uniwise/eslint-config` and `@uniwise/prettier-config`. Run yarn install to install local packages for formatting and linting.

**VSCode**

See the `settings.example.json` file for an example VSCode workspace settings that connects eslint to the correct config file. Requires the Prettier extension `esbenp.prettier-vscode`.

## Tips

**yarn link**

For development, a package can be linked into another project. This is often useful to test out new features or when trying to debug an issue in a package that manifests itself in another project.

Too learn more see [documentation](https://classic.yarnpkg.com/en/docs/cli/link/).
