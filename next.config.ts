import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 静的エクスポートを有効化
  images: {
    unoptimized: true, // GitHub PagesではNext.jsの画像最適化が使えないため
  },
  // リポジトリ名がユーザー名.github.io以外（例: /my-app/）の場合は以下が必要
  // basePath: '/repo-name',
};

export default nextConfig;
