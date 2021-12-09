// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let n = parseInt(input[0]);
let arr =[]
let n = 4
let input = [
    "push 1",
    "push 2",
    "top"
]
for (let i=0; i<n-1; i++) {
    if (input[i].includes("push")){
        arr.push(Number(input[i][5]))
    } 
    if (input[i].includes("top")){
        if(!Number(arr[arr.length-1])){
           console.log(-1)
        } console.log(arr[arr.length-1])
    }if(input[i].includes("empty")) {
        if(!arr.length==0) {
            console.log(0)
        } console.log(-1)
    }
}
console.log(arr)

//고민 했던 시간 : 40분
//정수 개수 구하는게 어려움! = > 정수를 생각할 필요 없었??
// pop, size 구현 하는게 어려웠고, 좀 더 효율적으로 구현 하는 방법을 알야 할 것 같음

//참고 했던 모범답안 
const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const stack = [];
const result = [];
const len = array.shift(); //배열 중 가장 앞 요소를 빼준 값 - 오 굿!

for (let i = 0; i < len; i++) {        
    switch(array[i]) {
        case 'pop':  //스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력, 없으면, -1 출력
          result.push(stack.pop() || -1);
          break;

        case 'size':  //스택에 들어 있는 정수의 개수를 출력
          result.push(stack.length);
          break;

        case 'empty': //스택이 비어 있으면 1, 아니면 0
          result.push(stack[0] ? 0 : 1);
          break;

        case 'top': //스택의 가장 위에 있는 정수를 출력, 만약에 스택에 들어 있는 정수가 없는 경우 -1
          result.push(stack[stack.length - 1] || -1);
          break;

        default: 
          stack.push(array[i].split(" ")[1]); //push 1 에서 1만 다시 스택에 push 
          break;
    }
}

console.log(result.join('\n'));

/*모범 답안을 보고 느낀점;
'정수'만 어떻게 뽑아낼지 고민이 었는데, 자바스크립트의 배열은 온전한 배열이 아닌 희소 배열 즉, 배열을 흉내낸 객체라 알고 있었는데,
*희소배열; 배열안의 요소의 위치가 연속적이지 않은 배열 
그래도 보통 배열이라고 함은, 같은 데이터의 모음이니까, 데이터 타입은 고려해주지 않아도 됬었나 싶다.
그리고, 중첩 if 문을 쓰면서 switch 문으로 쓸수 있겠다라는 것을 감을 잡았지만,
모범 답안을 보면서, 이렇게도 쓸수 있겠구나! 라고 생각이 들었다! 
switch 문과 삼항연산자를 잘 쓴 코드 인거 같다!
*/

//출처 :https://gurtn.tistory.com/67