import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
  },
  async rewrites() {
    return [
      {
        source: '/logout',
        destination: '/api/logout',
      },
    ];
  },
};

export default nextConfig;
