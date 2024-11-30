/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
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
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/, // Match video file types
      use: {
        loader: 'file-loader', // Use file-loader for these file types
        options: {
          outputPath: 'static/videos', // Output path for video files
          publicPath: '/_next/static/videos', // Public path for accessing the videos
        },
      },
    });
    return config;
  },
};

export default nextConfig;
