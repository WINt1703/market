/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    path: "https://wint1703.sirv.com/market/",
    loaderFile: "./sirv-loader.ts",
  },
};

module.exports = nextConfig;
