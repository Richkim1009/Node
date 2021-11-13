// whatwg, 기존방식 2가지가 있다.
// 공홈에서 참조하자.

// queryString 주소에 데이터가 남겨져 있다.
const {URL} = require('url');

const myURL = new URL('https://www.naver.com');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));