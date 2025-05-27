/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://mtesting.testingdigitaldmcc.com/' : '',
  images: {
    unoptimized: true,
  },
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
        source: "/:locale((?!en$|ar$|ch$|ru$)[\\w-]+)",
        destination: "/en/:locale*",
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
    ];
  },

  async headers() {
  return [
    {
      source: '/:path*/ch/:rest*',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noindex, nofollow',
        },
      ],
    },
    {
      source: '/:path*/ru/:rest*',
      headers: [
        {
          key: 'X-Robots-Tag',
          value: 'noindex, nofollow',
        },
      ],
    },
  ];
}
};

export default nextConfig;
