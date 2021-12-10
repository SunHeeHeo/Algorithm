/*풀이 시작 
3시 28분
끝난시각
5시 56분
<my idea>
1. 3으로 나눈다 나눴을때 몫은 회전수 나머지는 전체길이에서 끝에서 나머지 만큼의 인덱스 남기기
2. N번째 수에서 지울때 *로 치환
3. 회전이 다 되었을때 * 삭제, 나머지는 전체길이에서 끝에서 나머지 만큼의 인덱스 남기기
%를 써서 효율적으로 만들수 있을 꺼 같은데, 
지금 현상황에서 생각하기 어려워서, 답지 보기 전까지, 내가 생각한 방식으로 구현해보자!
구현하면서 힘들었던점,
파이썬으로 치환이 쉬웠던걸로 기억하는데,
자바스크립트는 특정 문자를 치환 하려면 for 구문을 돌려서 splice를 써서 삭제 해주는 방법 밖에 없어서
좀 코드가 길어진것 같다.
그리고, * 삭제후 다시한번 회전 하기 위새 배열을 뒤로 붙이는 과정이 쉽지 않았다 배열안에 배열이 들어가게 되거나 하는 상황이 벌어졌다.
아무래도 %로 회전하는 방법을 꼼꼼히 숙지 해야 할 것 같다!
*/


let K = 7;
let N = 3;
let arr=[]
let round =parseInt(K/N) //for 루프 돌려야 하는 횟수.
let reminder = K%N; //전체길이에서 끝에서 나머지 만큼의 인덱스를 남기기 위한 것.
let answer=[]
for (let i=1; i<K+1; i++) {
    arr.push(i)
}
//arr 생성 =[1,2,3,4,5,6,7]
//round = 2 //0,1
for(let i=0; i<round+1; i++) {
    for (let j=1;j<round+1; j++ ){
        b=arr.splice((j*3)-1,1,"*")
        answer.push(b)
    } 
    for (let j=0;j<K; j++ ) {
        if(arr[j] === "*" ) {
            arr.splice(j,1)
        } 
    } console.log(arr)
    a= arr.splice(0,arr.length-reminder)
    for (let i =0; i<a.length; i++){
        arr.push(a[i])
    } console.log(arr)
} 
console.log("answer",answer)

//이 문제는 구현하다가 생각했던 것처럼 구현이 잘 안됬다! 그래서, 답안을 봤음
// 참고 답안

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 알고리즘 - 큐

const num = +input[0].split(' ')[0]
const idx = +input[0].split(' ')[1]

const arr = Array.from({length : num}, (v, i) => i+1); //[1,2,3...num]

/* Array.는 array 생성자라고 한다
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
*/
const answer = [];

while (arr.length > 0){
    // 첫번째, 두번째 숫자 뒤로 보내기
    for(let i = 0; i< idx-1; i++){
        const cutNum = arr.shift(); //arr의 첫번째 요소를 삭제 후 cutNum에 값 선언
        arr.push(cutNum); //삭제된 값은 arr의 마지막에 추가 
    }
    // 맨 앞에 있는 숫자 빼서 새로운 배열에 push
    const ansNum = arr.shift(); //arr 배열 inx-1 번째가 배열의 제일 앞쪽에 오게 된다면, 삭제후, cutNum 값에 선언
    answer.push(ansNum); //answer이라는 배열에 다시 push
}

console.log(`<${answer.join(', ')}>`) //백준의 출력 값과 동일하게 적용



// 제대로 출력되지만 틀렸습니다 뜸

const num = +input[0].split(' ')[0]
const idx = +input[0].split(' ')[1]

let arr = [];
let answer = [];

for(let i=1; i<=num;i++){
    arr.push(i);
}

while(arr.length !==0){
    if(arr.length <=2){
        cutNum = arr.shift();
        answer.push(cutNum);
    }else{
        let cutArr = arr.splice(0,2); // 앞에 짤린 배열
        cutNum = arr.shift(); // 삭제된 숫자
        answer.push(cutNum); // 결과물 배열
        arr.splice(arr.length, 0, cutArr[0], cutArr[1]) // 새로운 배열 만들기
    }
}

console.log('<'+answer.join(', ')+'>');

//참고 했던 답안은 효진님 답안 :)
//출처 : https://github.com/hyojin-k/Algorithm/blob/main/Baekjoon/b11866/app.js
