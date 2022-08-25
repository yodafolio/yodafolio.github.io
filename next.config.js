/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://yodafolio.github.io'
      : ''
}
// 개발모드에서는 requestURL=localhost:3000/ 에 리소스를 요청하지만,
// 배포모드에는 requestURL = yodafolio.github.io/ 에 요청한다.
// assetPrefix 속성을 통해 리소스 요청 주소를 따로 넣어주어야 한다.

module.exports = nextConfig


