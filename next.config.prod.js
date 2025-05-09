/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  output: "export",
  // required for when it is hosted on github pages with an endpoint.
  // basePath: "/capoeira-derby",
  // assetPrefix: "/capoeira-derby",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
