//1부터 N까지 합 출력 하기
/*소요시간 5분
*/

let a = 10;
let sum =0
function solution(a) {
    for (let i=1;i<a+1;i++){
        sum+=i
    }
    return sum
}

console.log(solution(a))