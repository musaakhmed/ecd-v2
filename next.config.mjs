/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Contentful Assets
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/titres-service',
        destination: '/titres-services',
        permanent: true,
      },
      {
        source: '/titres-service/:path*',
        destination: '/titres-services/:path*',
        permanent: true,
      },
    ]
  },
  // Your Next.js config here
  // webpack: (webpackConfig) => {
  //   webpackConfig.resolve.extensionAlias = {
  //     '.cjs': ['.cts', '.cjs'],
  //     '.js': ['.ts', '.tsx', '.js', '.jsx'],
  //     '.mjs': ['.mts', '.mjs'],
  //   }
  //
  //   return webpackConfig
  // },
  // Prevent aggressive caching in production
  // experimental: {
  //   staleTimes: {
  //     dynamic: 0,
  //     static: 0,
  //   },
  // },
}

export default nextConfig
