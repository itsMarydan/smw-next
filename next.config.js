module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    ENV_USE: process.env.ENV_USE
  },
  swcMinify: true,
  images: {
    domains: ['admin.starmissionworld.com', 'localhost', '127.0.0.1', process.env.IMAGE_DOMAIN]
  }
}
