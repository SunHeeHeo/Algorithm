let s = "qwer";

function solution(s) {
  let length = s.length;
  let answer = "";
  if (length % 2 === 0) {
    answer += s[parseInt(length / 2) - 1] + s[parseInt(length / 2)];
  } else {
    answer += s[parseInt(length / 2)];
  }
  return answer;
}

//total requried time : 10min It was not that bad :)
