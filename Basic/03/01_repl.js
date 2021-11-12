/**
 * node에서 기본 제공
 * REPL이라는 콘솔을 제공
 * R(read), E(Evaluate), P(Print), L(Loop)
 * 터미널에서 node 입력
 */

function helloWorld() {
  console.log('Hello World');
  helloNode();
}

function helloNode() {
  console.log('Hello Node');
}

helloWorld();
