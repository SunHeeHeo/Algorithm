let s = "a234";

console.log(regax.test(s));

function solution(s) {
  let regax = /^[0-9]/g;
  if (!(s.length == 4 || s.length == 6)) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (!regax.test(s)) {
        return false;
      } else {
        return true;
      }
    }
  }
}

//pass :)
//다른분이 푸신것
function solution(s) {
  if (!(s.length == 4 || s.length == 6)) {
    return false;
  } else {
    const tmp = s.split("");
    for (let i = 0; i < tmp.length; i++) {
      if (isNaN(tmp[i])) {
        return false;
      }
    }
  }
  return true;
}
//isNAN()함수는 어떤 값이 NaN인지 판별(Not a Number)
