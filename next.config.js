const { i18n } = require('./next-i18next.config')
const SriPlugin = require('webpack-subresource-integrity')

securityHeaders = [
  // Only ever use HTTPS
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // Disables use of inline javascript in XSS attacks
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  // Prevents the browser from attempting to guess the type of content
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // Only allow secure origin to be delivered over HTTPS
  {
    key: 'Referrer-Policy',
    value: 'strict-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: `frame-ancestors 'self'`
  }
]

module.exports = {
  i18n,
  env: {
    NEXT_PUBLIC_BUILD_DATE: process.env.NEXT_PUBLIC_BUILD_DATE,
    NEXT_PUBLIC_TC_BUILD: process.env.NEXT_PUBLIC_TC_BUILD,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Subresource Integrity config
    config.output.crossOriginLoading = 'anonymous'
    config.plugins.push(new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: true,
    }))

    return config
  },
}