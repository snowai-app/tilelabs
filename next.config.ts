import type { NextConfig } from 'next';

/* No environment variables. When one is needed at runtime it is named in an `env` block here, and only when it has a value:
   an empty one is a textual substitution that blinds every process.env read to a real value beside it. Amplify's own
   variables reach neither the build nor the runtime dependably. */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: [{ key: 'X-Content-Type-Options', value: 'nosniff' }, { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }] }];
  },
};

export default nextConfig;
