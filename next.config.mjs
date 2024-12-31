/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co", "upload.wikimedia.org"], // Add any other domains you may need
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/pdf/",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
