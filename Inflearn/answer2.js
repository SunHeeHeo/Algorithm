/**
소요시간 18분 
 */
let a = 6;
let b = 7;
let c = 11;
let arr =[a,b,c]
// function getMax(arr) 
// {
//     return Math.max.apply(null, arr);
// }
// max= getMax(arr)
// console.log(max)
arr.sort(function(a, b)  {
    return a - b;
  });
// console.log(arr)
// max = arr.pop()
// console.log(max)
let answer;
function solution(arr) {
    if((arr[0]+arr[1])>arr[2]){
        answer="Yes"
    }else {
        answer="No"
    }
    return answer
}

/*시간이 걸렸던 이유는: 배열의 max를 구하는 함수를 쓰려고 했다가,
단순히 정렬만 시켜주면 될 것 같았다.
그리고, max값을 pop 해서, 변수로 지정해주려 했다가,
그럴 필요가 없을 것 같아서, 배열의 인덱스를 이용했다.
이 문제 처럼, 삼각형을 구하는 문제라면, 배열의 요소의 인덱스 값을 함수에 지정해주었지만,
더 나아가, 요소의 수가 다양 해졌을때 어떻게 해결할 건지 생각 해보는 것도 좋은것 같다.
*/
console.log(solution(arr))