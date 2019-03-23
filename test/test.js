import test from 'ava';
import delay from 'delay';

import cleanableInterval from '..';

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
