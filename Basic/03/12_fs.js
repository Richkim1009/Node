// node에선 파일시스템을 사용할 수 있다.
const fs = require('fs');

// fs.readFile('./readme.txt')
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch(err => {
//     throw err;
//   })

// fs.writeFile('./writeme.txt', '글이 입력됩니다.')
//   .then(() => {
    
//   })
//   .catch(err => {
//     throw err;
//   })

fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('1번', data.toString())
})

fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('2번', data.toString())
})

fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('3번', data.toString())
})

fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }
  console.log('4번', data.toString())
})
