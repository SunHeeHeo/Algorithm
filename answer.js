let N = 987;
function soulution(N) {
  N = N.toString();
  answer = 0;
  for (let i = 0; i < N.length; i++) {
    answer += Number(N[i]);
  }
  return answer;
}
soulution(N);

//왜 때문에 런타임 에러가 나는거죠?ㅠ
//다른 사람 풀이
function solution(n) {
  // 숫자풀이
  var sum = 0;

  do {
    sum += n % 10; //왜 10으로 나눈 나머지를 구해주는 거쥐?
    n = Math.floor(n / 10); //n을 10으로 나눈 몫을 내림 차순 해줘서 다시 N으로 값을 재 할당
  } while (n > 0);

  return sum;
}

/*haha need to think about the answer that i've found
anyway it's almost done with leve 1 questions on programmers :)
*/
