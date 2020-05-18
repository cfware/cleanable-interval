# @cfware/cleanable-interval [![NPM Version][npm-image]][npm-url]

A variant of setInterval that returns a cleanup function.

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
