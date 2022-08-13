import {promisify} from 'node:util';
import t from 'libtap';

import cleanableInterval from '@cfware/cleanable-interval';

const delay = promisify(setTimeout);

t.test('basic test', async t => {
	let iter = 0;
	const cleanup = cleanableInterval(() => {
		iter++;
	}, 100);

	t.equal(iter, 0);

	await delay(150);
	t.equal(iter, 1);

	await delay(100);
	t.equal(iter, 2);

	await delay(100);
	t.equal(iter, 3);

	cleanup();
	await delay(100);
	t.equal(iter, 3);
});
