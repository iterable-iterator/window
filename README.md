:mountain_cableway: [@iterable-iterator/window](https://iterable-iterator.github.io/window)
==

Iterable windowed iteration for JavaScript.
See [docs](https://iterable-iterator.github.io/window/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {window} from '@iterable-iterator/window';

for (const [x, y] of window(2, 'abcde')) ... ; // ab bc cd de
```

[![License](https://img.shields.io/github/license/iterable-iterator/window.svg)](https://raw.githubusercontent.com/iterable-iterator/window/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/window.svg)](https://www.npmjs.org/package/@iterable-iterator/window)
[![Tests](https://img.shields.io/github/actions/workflow/status/iterable-iterator/window/ci.yml?branch=main&event=push&label=tests)](https://github.com/iterable-iterator/window/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/window.svg)](https://github.com/iterable-iterator/window/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/window.svg)](https://github.com/iterable-iterator/window/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/window.svg)](https://www.npmjs.org/package/@iterable-iterator/window)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/window.svg)](https://codeclimate.com/github/iterable-iterator/window/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/window.svg)](https://codeclimate.com/github/iterable-iterator/window/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/window/main.svg)](https://codecov.io/gh/iterable-iterator/window)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/window.svg)](https://codeclimate.com/github/iterable-iterator/window/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/window/badge.svg)](https://iterable-iterator.github.io/window/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/window)](https://bundlephobia.com/result?p=@iterable-iterator/window)
