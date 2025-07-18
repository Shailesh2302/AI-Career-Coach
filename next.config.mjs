/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['inngest']
  },
  // Removed the deprecated 'target' property
  // Modern Next.js handles serverless deployment automatically
  
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Handle Inngest as external to prevent bundling issues
      config.externals = config.externals || [];
      config.externals.push('inngest');
    }
    return config;
  },
};

export default nextConfig;