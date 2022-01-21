let a = "2 3 3 1 3";
let b = "1 1 2 2 3";

function solution(a, b) {
  a = a.split(" ");
  b = b.split(" ");
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    let aNumber = Number(a[i]);
    let bNumber = Number(b[i]);
    if (aNumber === bNumber) {
      answer += `
    D`;
    } else if (aNumber === 1 && bNumber === 3) {
      answer += `
    A`;
    } else if (aNumber === 2 && bNumber === 1) {
      answer += `
    A`;
    } else if (aNumber === 3 && bNumber === 2) {
      answer += `
    A`;
    } else {
      answer += `
    B`;
    }
  }
  answer = answer.substring(1, answer.length);
  console.log(answer);
  return answer;
}

solution(a, b);
