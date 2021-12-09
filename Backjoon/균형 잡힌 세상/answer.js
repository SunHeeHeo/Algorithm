/*
모든 왼쪽 소괄호는 오른쪽 소괄호와만 짝을 이뤄야 한다.
모든 왼쪽 대괄호는 오른쪽 대괄호와만  짝을 이뤄야 한다.
짝을 이루는 두 괄호가 있을때, 그 사이에 있는 문자열도 균형이 잡혀야 한다.
각 문자열은 영문 알파벳, 공백, 소괄호 대괄호 등으로 이뤄져 있으며, 길이는 100 글자 보다 작거나 같다
*/

/*길이가 100글자 이하 *
step1 소괄호의 ( 갯수와 ) 갯수가 같은지 본다 아니면 no 출력
step2 대괄호의 [ 갯수와 ] 갯수가 같은지 본다 아니면 no 출력
step3 . 찍히면 종료를 의미 하므로 break*
이 모든 경우의 수를 통과하면 yes
*/

// 이 문제에서 핵심은? if 절을 얼마나 잘 쓰냐 인거 같은데 맞나?
//*
// let input = "A rope may form )( a trail in a maze."
// let count = 0;
// let searchChar = ["[","]","(",")"] //배열상태로 만들어도 좋을 것 같음
// let result =[]
// function getIndexOfNum(input,searchChar) {
//     let count = 0;
//     let pos = input.indexOf(searchChar);
//     while (pos !== -1) {
//         pos =  input.indexOf(searchChar, pos +1);
//         count ++;

//     }
//     result.push(count)
// }
// for (i=0; i<searchChar.length; i++) {
//     getIndexOfNum(input,searchChar[i])
// }
// for (i=0; i<result.length; i+=2){
//     if(result[i] !== result[i+1]) {
//         console.log("no")
//         break
//     } else {
//         console.log("yes")
//         break
//     }
// }
//*
/*고민 했던 시간 : 1시간 
구현 하면서 어려웠던 것 : 특정 문자 갯수 찾기
구현 하지 못했던 것 :
1. 문자의 총 갯수 제한, 
2. 문장의 . 이 찍힐때 break 하는 것,  조금 더 효율적으로 코드를 짜지 못한 것 
3. )( 이렇게 나와도, yes로 출력 되는 것!
*/

//답안 
// const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = "A rope may form )( a trail in a maze."
const open = ["(", "["];
const closed = [")", "]"];
let stack;
const yesno = []; //yesno 빈 배열
arr.slice(0, arr.length-1).forEach(v => { //입력값 하나씩 출력
    let isNo = false;
    stack = []; //stack 빈 배열
    for (let i=0; i<v.length; i++) {
        if (open.includes(v[i])) stack.push(v[i]); //open의 배열에, v[i]의 요소가 있다면, stack 배열에 push ( or [
        else if (closed.includes(v[i])) { // closed 배열에, v[i]의 요소가 있다면, ) or ]
            if (stack.pop() !== open[closed.indexOf(v[i])]) { //stack 마지막 요소와 (or [  closed에서 ),]의 인덱스로 찾은 open 요소와 같지 않다면
                yesno.push("no"); // yesno에 no를 입력
                isNo = true; 
                break;
            }
        }
    }
    if (!isNo) { //만약에 isNo가 false가 라면,
        if (stack.length === 0) yesno.push("yes"); //stack의 길이가 0이라면, yes,no에 yes를 입력
        else yesno.push("no"); // 그게 아닐시 no를 입력 
    }
});
console.log(yesno.join("\n"));



