/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/en/:path*', // Matches any path with '/en'
  //       destination: '/:path*', // Redirects to the path without '/en'
  //       permanent: true, // Set to true for permanent redirection (301)
  //     },
  //   ];
  // },
};

export default nextConfig;
