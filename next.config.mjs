const evaluationsOrigin = (
  process.env.EVALUATIONS_ORIGIN || 'https://evaluations.espaceforma.be'
).replace(/\/+$/, '')

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
        source: '/evaluations',
        destination: evaluationsOrigin,
        permanent: false,
      },
      {
        source: '/evaluations/:slug',
        destination: `${evaluationsOrigin}/:slug`,
        permanent: false,
      },
      {
        source: '/quiz1a',
        destination: `${evaluationsOrigin}/quiz-1a`,
        permanent: false,
      },
      {
        source: '/quiz1b',
        destination: `${evaluationsOrigin}/quiz-1b`,
        permanent: false,
      },
      {
        source: '/quiz2',
        destination: `${evaluationsOrigin}/quiz-2`,
        permanent: false,
      },
      {
        source: '/evaluation-ts',
        destination: `${evaluationsOrigin}/titres-services`,
        permanent: false,
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
