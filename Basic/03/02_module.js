/**
 * 모듈: 특정한 기능을 하는 함수나 변수들의 집합
 */

 //export default checkOddOrEven; // import
 const {odd, even} = require('./var.js');
 // console.log(value);
 
 function checkOddOrEven(number) {
   if(number % 2) {
     return odd;
   } else {
     return even;
   }
 }

 module.exports = checkOddOrEven; // const