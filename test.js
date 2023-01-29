const test = require('ava');

test('my passing test', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});