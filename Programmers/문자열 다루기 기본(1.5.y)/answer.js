let s = "a234";

console.log(regax.test(s));

function solution(s) {
  let regax = /^[0-9]/g;
  return regax.test(s);
}
// for (let i = 0; i < s.length; i++) {
//   if (!regax.test(s)) {
//     return false;
//   } else {
//     return true;
//   }
// }

//pass :)
