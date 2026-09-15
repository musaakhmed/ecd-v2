/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/evaluations', destination: '/', permanent: false },
      { source: '/evaluations/:slug', destination: '/:slug', permanent: false },
      { source: '/quiz1a', destination: '/quiz-1a', permanent: true },
      { source: '/quiz1b', destination: '/quiz-1b', permanent: true },
      { source: '/quiz2', destination: '/quiz-2', permanent: true },
      { source: '/evaluation-ts', destination: '/titres-services', permanent: true },
    ]
  },
  serverExternalPackages: ['@react-pdf/renderer', '@react-pdf/layout'],
}

export default nextConfig
