import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
  },
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
      {
        source: '/logout',
        destination: '/api/logout',
      },
    ];
  },
};

export default nextConfig;
