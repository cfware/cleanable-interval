import test from 'ava';

import cleanableInterval from '..';

function sleepFor(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

test('basic test', async t => {
	let iter = 0;
	const cleanupFn = cleanableInterval(() => {
		iter++;
	}, 100);

	t.is(iter, 0);

	await sleepFor(150);
	t.is(iter, 1);

	await sleepFor(100);
	t.is(iter, 2);

	await sleepFor(100);
	t.is(iter, 3);

	cleanupFn();
	await sleepFor(100);
	t.is(iter, 3);
});
