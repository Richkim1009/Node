const {odd, even} = require('./var');
const test = require('./02_module')
console.time('zerocho');
console.table([{name: '제로', birth: 1994}, {name: '초', birth: 1991}]);
setImmediate()// node에만 있는 함수
console.timeEnd('zerocho');