/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove or comment out redirects
  // async redirects() {
  //   return [
  //     {
  //       source: '/en/:path*',
  //       destination: '/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
