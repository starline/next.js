/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    URI: 'https://'
  }
}

module.exports = nextConfig
