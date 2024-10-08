/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/dgibzibwx/image/upload/**',
          },
        ],
      },
};

export default nextConfig;
