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
  // Alternative: exclude the problematic route from static generation
  async redirects() {
    return []
  },
  // Ensure API routes are treated as serverless functions
  target: 'serverless', 
};

export default nextConfig;
