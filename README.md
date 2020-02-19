<div align="center">
  <h1>Funda Workshop Web Development Minor</h1>
</div>

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Contributing](#contributing)
- [Licenses](#licenses)

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/)
- Yarn package manager - [Download & Install Yarn](https://yarnpkg.com/en/docs/install#mac-stable)

## Installation

Clone the repository and change the directory

```bash
$ git clone https://github.com/larsdouweschuitema/workshop-frontend-minor.git && cd workshop-frontend-minor
```

Install dependencies using `yarn`
```
$ yarn install
```

Run app in development mode

```
$ yarn start
```

Create production build

```
$ yarn build
```

## Tech stack

- Package manager `yarn`
- Module bundler `webpack`
- Client-side framework `vue`
- Linter `eslint`
- Git hooks `husky`

## Features

- Consistent code styles using `.editorconfig` and `eslint`
- Split development and production `webpack` configurations using `webpack-merge`
- CSS extraction on production using `mini-css-extract-plugin`
- Hot reloading during local development using `webpack-dev-server`

## Contributing

To contribute to this repository see the [CONTRIBUTING.md](CONTRIBUTING.md) file for details

We use `.editorconfig` to define and maintain consistent coding styles between different editors and IDEs.
Please check [editorconfig.org](https://www.editorconfig.org) if your IDE requires a plugin or supports EditorConfig by default.

## Licenses

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
