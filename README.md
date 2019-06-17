# Zoas Store Client


<div align="center">

![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)

</div>

A client for the [Zoas Store API](https://github.com/jeovazero/zoas-store-api-graphql)

This project use:

- [React](https://github.com/facebook/react/)
- [Material UI](https://material-ui.com/)
- [Relay](https://github.com/facebook/relay)
- [Flow](https://github.com/facebook/flow)
- [Standard js](https://github.com/standard/standard)
- [Prettier-standard](https://github.com/sheerun/prettier-standard)
- [Storybook](https://github.com/storybookjs/storybook)
- [react-testing-libray](https://github.com/testing-library/react-testing-library)
- [Jest](https://github.com/facebook/jest)


<div align="center">

![zoas-gif](https://user-images.githubusercontent.com/11683201/59558064-b9c91780-8fbf-11e9-95d6-9e9bfea1ae78.gif)

</div>

## Scripts

It required the environment variable `API_URL`, set it before running the project!

#### `yarn install`

> Install the dependencies

#### `yarn relay`

> Run the relay-compiler

#### `yarn start`

> Run in development mode (localhost:8081)

> Eg.: `API_URL=http://localhost:3000 yarn start`

#### `yarn build`

> Build the application

> Eg.: `API_URL=http://localhost:3000 yarn build`

#### `yarn flow`

> Run the typechecker

#### `yarn lint:fix`

> Check and fix the code conforms to linting rules (standard)

#### `yarn prettier`

> Formats the code and run the linter

#### `yarn storybook`

> Run storybook in development mode

#### `yarn build-storybook`

> Build the storybook

#### `yarn test`

> Run the tests

#### `yarn test:watch`

> Run the tests in watch mode


## Docker :whale:

#### Building

```
docker-compose build
```

#### Running

```
docker-compose up
```

> Client Running on: `http://localhost:3001`

## Running the project

Required: run the [Zoas Store API](https://github.com/jeovazero/zoas-store-api-graphql)

1. `yarn install`
2. `yarn relay`
3. `API_URL=http://localhost:3000 yarn start`

> Check the correct `API_URL` (Zoas Store API URL)

#### with docker

1. Before to run the project, you need run this [Zoas Store API](https://github.com/jeovazero/zoas-store-api-graphql)
2. Check the correct `API_URL` (Zoas Store API URL) in **docker-compose.yml**
3. Run `docker-compose build`
4. Run `docker-compose up`
5. Done! Test the application

## License

The source code is licensed under **MIT**. License is available [here](https://github.com/jeovazero/zoas-store-client/blob/master/LICENSE)

#

by <a href="https://github.com/jeovazero">@jeovazero</a>
