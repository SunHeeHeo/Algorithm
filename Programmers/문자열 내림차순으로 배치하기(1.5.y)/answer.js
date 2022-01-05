let s = "Zbcdefg";

//배열만 sort 가능 하구나!
function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }
  console.log(arr);
  arr.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
    else return -1;
  });
  console.log(arr);
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  console.log(answer);
  return answer;
}
solution(s);

//wth? 왜 런타임 에러인가 ㅠㅠ

//다른 분이 푼 것
function solution(s) {
  return s.split("").sort().reverse().join("");
}
/*문자열을 split 메소드를 사용해서 배열로 쪼갠다
sort 메소드로 순차적으로 나열해준다
reverse메소드로 반전시켜 준다
join 메소드로 문자열로 바꿔서 반환 한다.
출처: https://velog.io/@760kry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C-%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0-sck2g6ce2n
split 메소드를 사용해서 배열로 쪼갤수 있구나! 오늘 처음 안 사실 또르르..ㅠㅠ
*/
