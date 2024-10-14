// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/",
//         destination: "/en",
//       },
//       {
//         source: "/about",
//         destination: "/en/about",
//       },
//       {
//         source: "/:locale((?!en$|ar$|ch$|ru$)[\\w-]+)",
//         destination: "/en/:locale*",
//       },
//       {
//         source: "/contact",
//         destination: "/en/contact",
//       },
//       {
//         source: "/departments",
//         destination: "/en/departments",
//       },
//       {
//         source: "/department/:path*",
//         destination: "/en/department/:path*",
//       },
//       {
//         source: "/events",
//         destination: "/en/events",
//       },
//       {
//         source: "/events/:path*",
//         destination: "/en/events/:path*",
//       },
//       {
//         source: "/gallery",
//         destination: "/en/gallery",
//       },
//       {
//         source: "/news",
//         destination: "/en/news",
//       },
//       {
//         source: "/news/:path*",
//         destination: "/en/news/:path*",
//       },
//       {
//         source: "/team",
//         destination: "/en/team",
//       },
//       {
//         source: "/team/:path*",
//         destination: "/en/team/:path*",
//       },
//       {
//         source: "/services/:path*",
//         destination: "/en/services/:path*",
//       },
//     ];
//   },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Uncomment below if you are exporting as a static site
  // output: 'export',
  
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/en",
      },
      {
        source: "/about",
        destination: "/en/about",
      },
      {
        source: "/contact",
        destination: "/en/contact",
      },
      {
        source: "/departments",
        destination: "/en/departments",
      },
      {
        source: "/department/:path*",
        destination: "/en/department/:path*",
      },
      {
        source: "/events",
        destination: "/en/events",
      },
      {
        source: "/events/:path*",
        destination: "/en/events/:path*",
      },
      {
        source: "/gallery",
        destination: "/en/gallery",
      },
      {
        source: "/news",
        destination: "/en/news",
      },
      {
        source: "/news/:path*",
        destination: "/en/news/:path*",
      },
      {
        source: "/team",
        destination: "/en/team",
      },
      {
        source: "/team/:path*",
        destination: "/en/team/:path*",
      },
      {
        source: "/services/:path*",
        destination: "/en/services/:path*",
      },
      // Locale handling: redirect all other locales to /en, unless they are 'en', 'ar', 'ch', or 'ru'
      {
        source: "/:locale((?!en$|ar$|ch$|ru$)[\\w-]+)",
        destination: "/en/:locale*",
      },
    ];
  },
};

export default nextConfig;
