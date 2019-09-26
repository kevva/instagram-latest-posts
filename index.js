'use strict';
const controlAccess = require('control-access');
const instagramPosts = require('instagram-posts');

const {
	ACCESS_ALLOW_ORIGIN,
	CACHE_MAX_AGE = 3600,
	INSTAGRAM_USERNAME,
	MAX_POSTS = 6
} = process.env;

if (!INSTAGRAM_USERNAME) {
	throw new Error('Please set your Instagram username in the `INSTAGRAM_USERNAME` environment variable');
}

if (!ACCESS_ALLOW_ORIGIN) {
	throw new Error('Please set the `access-control-allow-origin` you want in the `ACCESS_ALLOW_ORIGIN` environment variable');
}

module.exports = async (request, response) => {
	controlAccess()(request, response);

	const posts = await instagramPosts(INSTAGRAM_USERNAME, {count: MAX_POSTS});

	response.setHeader('cache-control', `s-maxage=${CACHE_MAX_AGE}, max-age=0, stale-while-revalidate`);
	response
		.status(200)
		.json(posts);
};
