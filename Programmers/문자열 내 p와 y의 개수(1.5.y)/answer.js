let s = "Pyy";

function solution(s) {
  let cntP = 0;
  let cntY = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "y" || s[i] == "Y") {
      cntY += 1;
    } else if (s[i] == "p" || s[i] == "P") {
      cntP += 1;
    }
  }
  if (cntY == cntP) {
    return true;
  } else if (cntY === 0 && cntP === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(solution(s));

//filter 는 배열에서만 쓸수 있다!
/* I tried to solve this question using filter method.
but I realized that filter method only can be used with arrays 
anyway no prob to solve it :) */
