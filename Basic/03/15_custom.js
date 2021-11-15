const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('1', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('2', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log('3', Date.now() - start);
});

// uvthreadpoolsize를 사용하면 코어갯수를 선택할 수 있다.

const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});
