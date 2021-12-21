let s = "one4seveneight"
let sObject ={};
let zero = /zero/gi;
let one = /one/gi;
let two = /two/gi;
let three = /three/gi;
let four = /four/gi;
let five = /five/gi;
let six = /six/gi;
let seven = /seven/gi;
let eight = /eight/gi;
let nine = /nine/gi;
//삼항 연산자 
// console.log(sObject[1])
let i=1
// for (let key in sObject){
//     console.log(sObject[key])
//     s.replace(sObject[key],i+1)
//     i++
//     console.log(i)
// } // for in 구문 시도 실패 정규식이 아예 문자열로 인식 

s=s
.replace(zero,0)
.replace(one,1)
.replace(two,2)
.replace(three,3)
.replace(four,4)
.replace(five,5)
.replace(six,6)
.replace(seven,7)
.replace(eight,8)
.replace(nine,9)

console.log(s)

//아쉬웠던것 좀 더 식을 간추릴수 있을꺼 같아서 객체로 만들고 for in 구문을 써서, 문자열을 치환하려고 했지만 잘 안됬다.

//다른 분 답안 
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]); //one/1/ 4 seven/7/ eight/8/ 
        answer = arr.join(i); //배열의 모든 요소를 연결해 하나의 문자열로 만듦.
        console.log(answer)
    }

    return Number(answer);
}

solution(s)


//split 제대로 알기, join 문 알기 => 여러번 반복해서 풀어 보기 