


# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Translations
- JSON server with stubbed data
- Assets file-loader

## [0.0.1] - 2020-02-18
### Added
- Add `webpack` and `webpack-cli` dependencies to serve as module bundler
- Bundle modules using/adding `webpack` and `webpack-cli`
- Create entry file served by webpack using `html-webpack-plugin`
- Clean `/dist` folder for each build using `clean-webpack-plugin`
- Serve and allow for hot reloading using `webpack-dev-server`
- Create separate webpack configurations for production and development using `webpack-merge`
- Prevent automatic version prefixing when updating dependencies using `.yarnrc` file
- Ignore `/node_modules` and `/dist` directories by adding `.gitignore` file
- Add`scripts` for production build and development mode to `package.json`
- Add README.md
- Add MIT LICENSE.md file
- Specify guidelines in CONTRIBUTING.md file