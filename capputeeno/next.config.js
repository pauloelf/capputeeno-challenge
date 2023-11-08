/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['storage.googleapis.com']
  }
}

module.exports = nextConfig
