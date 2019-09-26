# instagram-latest-posts [![Build Status](https://travis-ci.com/kevva/instagram-latest-posts.svg?branch=master)](https://travis-ci.com/kevva/instagram-latest-posts)

> Service to get the latest Instagram posts from a user

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://zeit.co/new/project?template=kevva/instagram-latest-posts)


## Usage

```
$ git clone https://github.com/kevva/instagram-latest-posts.git
$ now instagram-latest-posts --env INSTAGRAM_USERNAME="kevvayo" --env ACCESS_ALLOW_ORIGIN="*" --env MAX_POSTS="12" --env CACHE_MAX_AGE="3600"
```

### Environment variables

Define the following environment variables:

- `INSTAGRAM_USERNAME` - The username you like to get posts from.
- `ACCESS_ALLOW_ORIGIN` - The URL of your website or `*` if you want to allow any origin (not recommended), for the `Access-Control-Allow-Origin` header.
- `MAX_POSTS` - The number of posts returned. Optional. Defaults to 6.
- `CACHE_MAX_AGE` - The maximum age for [shared cache-control](https://zeit.co/docs/v2/advanced/concepts/cdn-and-global-distribution/#smart-cdn) in seconds. Optional. Defaults to 3600 (1 hour).
