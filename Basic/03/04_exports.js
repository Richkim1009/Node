console.log(__filename); // 파일 경로
console.log(__dirname); // 폴더 경로

// 한가지만 보내고 싶을때 module.exports = abc;
// 두가지 이상 보내고 싶을때 exports.a = a, exports.b = b;

console.log(this); // {}
console.log(this === module.exports);
function a() {
  console.log(this === global);
}
a();