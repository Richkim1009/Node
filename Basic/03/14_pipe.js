const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 8});
const writeStream = fs.createWriteStream('./writeme3.txt');
readStream.pipe(writeStream);

console.log('before', process.memoryUsage().res);
fs.writeFileSync('./big.txt');