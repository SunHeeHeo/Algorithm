let s = "try hello world";

function solution(s) {
  answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
solution(s);

//왜 정확도가 100프로가 안나오지?
//다른분이 푼것
function solution(s) {
  let arr = s.split(" ");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let words = arr[i]
      .split("")
      .map((word, idx) => {
        if (idx % 2 === 0) {
          return word.toUpperCase();
        } else if (word % 2 !== 0) {
          return word.toLowerCase();
        }
      })
      .join("");

    result.push(words);
  }

  return result.join(" ");
}
