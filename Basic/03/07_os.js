const os = require('os');

console.log(os.cpus());

// 기본 내장이므로 경로를 쓰지 않아도 된다.
// os에 기본적으로 연결 되어있다.

// 경로를 보여준다.
const path = require('path');

console.log(path.join(__dirname, '..', '06_process.js'));
