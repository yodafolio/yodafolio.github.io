module.exports = {
    'process.env.BACKEND_URL':
      process.env.NODE_ENV === 'production'
        ? 'https://yodafolio.github.io'
        : '',
};
// 이제부터 process.env.BACKEND_URL 라는 환경변수를 사용할 수 있다.
// 이 환경변수는 이미지, 동영상 등의 리소스에 접근하거나 사용자에게 보여지는 URL을 설정할 때 쓰인다.

// 참고 사이트 https://velog.io/@minseok_yun/GitHub-Action%EC%9C%BC%EB%A1%9C-Next.js-Typescript-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0