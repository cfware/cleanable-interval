# @cfware/cleanable-interval

[![Travis CI][travis-image]][travis-url]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

A variant of setInterval that returns a cleanup function.

### Install @cfware/cleanable-interval

This module requires node.js 13.7.0 or above.

```sh
npm i --save @cfware/cleanable-interval
```

## Usage

```js
import cleanableInterval from '@cfware/cleanable-interval';

let iter = 0;
const cleanupFn = cleanableInterval(() => {
	iter++;
	console.log(`Iteration ${iter} of 2`);
	if (iter > 1) {
		cleanupFn();
	}
}, 100);
```


[npm-image]: https://img.shields.io/npm/v/@cfware/cleanable-interval.svg
[npm-url]: https://npmjs.org/package/@cfware/cleanable-interval
[travis-image]: https://travis-ci.org/cfware/cleanable-interval.svg?branch=master
[travis-url]: https://travis-ci.org/cfware/cleanable-interval
[gk-image]: https://badges.greenkeeper.io/cfware/cleanable-interval.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/cleanable-interval.svg
[downloads-url]: https://npmjs.org/package/@cfware/cleanable-interval
[license-image]: https://img.shields.io/npm/l/@cfware/cleanable-interval.svg
