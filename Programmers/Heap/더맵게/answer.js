/*
소요시간:
28분
<my idea>
1. 모든 배열의 요소가 7을 넘는지 한번에 어떻게 알지?
-> 최소 힙이라면, sort 해서 첫번째 값이 7넘는지 안넘는지 보면 되겠다!
2. sort후, 배열의 첫번째 값이 7이 넘을때까지 while 구문 돌려주기!

문제를 풀면서 시간이 걸린 부분은 while 구문에서도 한번 더 정렬을 해줘야 했다!
문제와 동일한 값이 구해졌지만,
아쉽게도, 이 문제는 프로그래머스에서 javascript는 제공되지 않았다!
*/

let scoville = [1, 2, 3, 9, 10, 12];
let K = 7

function solution(scoville,K) {
    scoville = scoville.sort(function(a, b)  { //화살표 함수로 간단히 나타내기!
        return a - b;
      });
      let count =0
      while(scoville[0]<7){
          newNumber=scoville[0]+(scoville[1]*2)
          scoville.splice(0,2,newNumber)
          count ++
          scoville = scoville.sort(function(a, b)  { //화살표 함수로 간단히 나타내기!
            return a - b;
          });
      }
      console.log(count)
}

solution(scoville,K)