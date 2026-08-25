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
      {
        source: '/inclusion-numerique/connectes-autonomes',
        destination: '/inclusion-numerique/seniors-digital',
        permanent: true,
      },
      {
        source: '/quiz1a',
        destination: 'https://forms.gle/mWDtJjMS9h8ncD7u6',
        permanent: true,
      },
      {
        source: '/quiz1b',
        destination: 'https://forms.gle/7fc4Ccgo4xdWHo5n7',
        permanent: true,
      },
      {
        source: '/quiz2',
        destination: 'https://forms.gle/oJsFa9afWVGsAX3XA',
        permanent: true,
      },
      {
        source: '/evaluation-ts',
        destination: 'https://forms.gle/rfCioBKNw4eA7FSW9',
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
