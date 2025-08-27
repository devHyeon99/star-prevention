import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 이 부분을 추가하세요!
  output: 'export',

  // 아래는 기존에 설정했던 내용입니다. 그대로 두세요.
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
