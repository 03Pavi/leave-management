/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    output: "standalone",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  