let n = 12345;
function solution(n) {
  n = n.toString();
  let answer = [];
  for (let i = n.length; i > 0; i--) {
    answer.push(i);
  }
  return answer;
}
solution(n);
//아니 왜 틀린겨..답은 제대로 나오는데

//다른 분이 푼거
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o)));
}

/*
이 비슷한 문제 푼거 같은데, toString()을 사용해서 배열을 못 만들었구나!
반성하자 ㅠㅠ
*/
