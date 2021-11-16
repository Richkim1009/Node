/**
 * 클라이언트가 서버로 요청
 * 서버는 요청을 처리
 * 처리 후 클라이언트로 응답
 * 남들한테 서버를 공개하는것 배포
 */

const http = require('http');

http.createServer((req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.write('<p>Hello server</p>');
  res.end('<p>Hello Zerocho</p>');
})
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
  });