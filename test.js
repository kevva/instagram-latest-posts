import test from 'ava';
import {createServerWithHelpers} from '@now/node/dist/helpers';
import got from 'got';
import testListen from 'test-listen';

const {
	ACCESS_ALLOW_ORIGIN,
	INSTAGRAM_USERNAME
} = process.env;

test.before(async t => {
	process.env.ACCESS_ALLOW_ORIGIN = '*';
	process.env.INSTAGRAM_USERNAME = 'cats_of_instagram';

	t.context.url = await testListen(
		createServerWithHelpers(require('.'), {consumeEvent: () => ({})})
	);
});

test.after(() => {
	process.env.ACCESS_ALLOW_ORIGIN = ACCESS_ALLOW_ORIGIN;
	process.env.INSTAGRAM_USERNAME = INSTAGRAM_USERNAME;
});

test('fetch latest posts for user', async t => {
	const body = await got(t.context.url, {
		headers: {'x-now-bridge-request-id': 1}
	}).json();

	t.is(body.length, 6);
});

test('set headers', async t => {
	const {headers} = await got(t.context.url, {
		headers: {'x-now-bridge-request-id': 1}
	});

	t.is(headers['access-control-allow-origin'], '*');
	t.is(headers['cache-control'], 's-maxage=3600, max-age=0, stale-while-revalidate');
});
