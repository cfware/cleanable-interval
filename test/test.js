import {promisify} from 'util';
import test from 'ava';

import cleanableInterval from '..';

const delay = promisify(setTimeout);

test('basic test', async t => {
	let iter = 0;
	const cleanupFn = cleanableInterval(() => {
		iter++;
	}, 100);

	t.is(iter, 0);

	await delay(150);
	t.is(iter, 1);

	await delay(100);
	t.is(iter, 2);

	await delay(100);
	t.is(iter, 3);

	cleanupFn();
	await delay(100);
	t.is(iter, 3);
});
