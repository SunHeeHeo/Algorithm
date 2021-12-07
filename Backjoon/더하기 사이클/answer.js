// 1. 하나의 값을 입력받을 때
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = '1'
let a = input[0];
let b = input[1];
if (!b) {
    b=a;
    a='0';
} 
console.log(a,b)
var originAnswer = input
var c = Number(a) + Number(b) //8
var answer =  b + String(c)
console.log("answer",answer)
console.log("originanswer",originAnswer)
while (true) {
    var i = 1
    console.log("들어가니",answer,originAnswer) //11,1
    if(answer==originAnswer) {
        console.log(answer,originAnswer)
        break
    } else { 
        let newAnswer = String(answer)  //11
        let newAdd = (String(Number(newAnswer[0])) + Number(newAnswer.substring(newAnswer.length-1))) //2/
        console.log("2",answer,newAdd) //11,2
        answer = (String(newAnswer.substring(newAnswer.length-1)) +String(newAdd.substring(newAdd.length-1))) 
        console.log("3", answer)
        break
        i++
        b= Number(newAdd[1]) //8
        console.log(b)
        answer = String(b)+ answer.substring(answer.length-1)
        console.log(answer)
        i++
        console.log("i",i)
        }
    }


//1시간 넘게 풀었지만 못풀었다^^
//답지 참고하자 ㅋㅋㅋ 답지는 엄청 간단하네^^

let input = Number(require('fs').readFileSync('/dev/stdin').toString().split(' '));
let num = input;
let sum;
let count = 0;

while (true) {
	count++;
    // 주어진 수 합
    sum = Math.floor(num / 10) + num % 10;
    // 주어진 수의 오른쪽 자릿수 + 새로운 수의 오른쪽 자릿수
    // math.floor 주어진 숫자와 같거나, 작은 정수 중에서 가장 큰 수를 반환 //math.floor 에 대한 것을 아는게 핵심이네!
    num = (num % 10) * 10 + sum % 10;  
    // 주어진수 === 새로운 수 루프 탈출
    if (input === num) break;
}