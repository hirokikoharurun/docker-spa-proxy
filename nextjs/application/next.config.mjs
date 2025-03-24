/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  // ↓ SSGの場合に使用する設定
  // distDir: '../../nginx/html',
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // }
};

export default nextConfig;
