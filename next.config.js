const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", //allowed for all domains
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  
  webpack(config, { isServer }) {
    // Adding the video file loader
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|mkv|flv|wmv|mpg|mpeg|m4v|mov)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/static/videos/`,
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
module.exports = nextConfig;