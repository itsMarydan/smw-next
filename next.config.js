module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    ENV_USE: process.env.ENV_USE
  },
  swcMinify: true,
  images: {
    domains: ['2252-72-106-136-194.ngrok.io', 'localhost', '127.0.0.1', process.env.DOMAIN]
  }
}
