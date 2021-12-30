/*소요시간 10분*/

let d =[2,2,3,3]
let budget = 10

function solution(d, budget) {
    let i=0;
    let sum=0;
    let answer=[]
    d=d.sort(function(a, b) { // 오름차순
        return a - b;
        });
    
    while(sum<budget){
        sum+=d[i]
        if(sum>=budget){
            break
        }
        answer.push(d[i])
        i++
    }
    return answer.length
}

console.log(solution(d, budget))

/*예상은 했지만, 정확도 26.1 ㅎㅎㅎ 
문제는 요소의 합이 budget보다 넘지 않으면 while 절에서 한번 더 돌아 가기 때문에,
요소의 합이 budget 초과 되는 수가 1개 더 추가로 while 절로 넘어가는게 발생해서 오류가 발생 했다
while에 if 절을 넣어 주었더니, 정확도 82프로 올라감 나머지는 왜?ㅠ*/

//다른 사람이 푼 것
function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (d.reduce((a, b) => (a + b), 0) > budget) {
        //a는 누적값, b는 현재값의 합의 결과가 budget 보다 클때, d 배열에서 마지막 수를 삭제
      d.pop();
    }
    return d.length; //남은 d의 길이를 구하면 됨
}
/*
reduce 메소드
배열.reduce((누적값, 현재값, 인덱스, 요소) => { return 결과 }, 초깃값);
오늘은 reduce 메소드에 대해서 좀 더 깊게 공부 해봐야 겠다.
*/
