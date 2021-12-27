let answer1 = [1,2,3,4,5]
let answer2 = [2,1,2,3,2]
let answer3 =[3,3,1,1,2]
let answers =[1,2,3,4,5]
let n=0;
let j=0;
let z=0;
let answer=[]
//가장 많이 문제를 맞힌 사람은 누구?
function solution(answers) {
for (let i=0; i<answers.length; i++) {
    if (answer1[i]==answers[i]) {
        n+=1
    }if (answer2[i]===answers[i]){
        j+=1
    }if(answer3[i]===answers[i]){
        z+=1
    }
} answer.push(n,j,z) //정렬 후, 0이면 splice해서 배열에서 빼기, 
//그 다음 max를 구하고, max의 index +1 을 빈배열에 push, shift로 값을 빼주기
answer.sort(function(a, b)  {
    return b - a;
  });
let rank =[]
for (let i =0; i<answer.length; i++) {
    if(answer[i]===0) {
        answer.shift()
    }else {
        rank.push(i+1)
        answer.shift()
    }
}
console.log(rank)
}
solution(answers)

//오메 런타임 에러 나네 ㅠㅠ
//다른 분이 푼 것 

function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};
    return answer;
}