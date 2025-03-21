# @patternfly/react-charts

This package provides PatternFly charting components for [PatternFly][patternfly].

### Installing

```sh
yarn add @patternfly/react-charts
yarn add victory
```

or

```sh
npm install @patternfly/react-charts --save
npm install victory --save
```

Note that Victory is now an optional peer dependency, allowing future chart libraries to be installed without including Victory dependencies and vice versa
  - You may choose to install the single "victory" package to cover all features
  - Or, install packages based on the features used in your app (e.g., "victory-core", "victory-tooltip", etc.).

# Usage

#### Pre-requisites

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```js
import '@patternfly/react-core/dist/styles/base.css';
```

#### Example Component Usage

```js
import { Area } from '@patternfly/react-charts/victory';

export default <Area />;

<Area data={[{ x: 1, y: 1 }, { x: 2, y: 2 }]} />;
```

All css related to each component is provided alongside it. There is no component level CSS to import.

# Documentation

This project uses Gatsby. For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

A comprehensive list of components and detailed usage of each can be found on the [PatternFly React Docs][docs] website
You can also find how each component is meant to be used from a design perspective on the [PatternFly 4 Core][patternfly-4] website.

Note: All commands below assume you are on the root directory in this repository.

### Install & run locally

Run to install all the dependencies, build and run the site locally.

```sh
yarn install && yarn start
```

# Contributing Components

This library makes use of the babel plugin from [@patternfly/react-styles](../react-styles/README.md) to enable providing the CSS alongside the components. This removes the need for consumers to use (style|css|sass)-loaders. For any CSS not provided by core please use the `StyleSheet.create` utility from [@patternfly/react-styles](../react-styles/README.md). This will prevent collisions with any consumers, and allow the CSS to be bundled with the component.

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo. To only run the @patternfly/react-charts tests:

```
yarn test packages/react-charts
```

[patternfly-4]: https://github.com/patternfly/patternfly
[docs]: https://react-staging.patternfly.org/
