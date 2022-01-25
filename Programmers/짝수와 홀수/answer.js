let num = 4;

function solution(num) {
  let answer;
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  console.log(answer);
  return answer;
}

solution(num);
