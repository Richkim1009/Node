// 노드로 멀티 스레드를 사용할땐 spawn을 사용하자
const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

process.stdout.on('data', function(data) {
  console.log(data.toString());
});

process.stderr.on('data', function(data) {
  console.error(data.toString());
});