/*
My idea
배열의 요소의 합을 구하고, target을 빼면, 내가 구해야 할 수가 나온다.
내가 구해야 할 수는 요소끼리의 총 합이 0이 되게 하면 된다.
1. 첫번째 요소가 다른 요소들과 더했을때 합이 내가 구해야 하는 수와 동일 할 경우가 나오면,  
2. 카운트 1씩 더하도록 만든다.
총 카운트 된 수를 return 하는 것!
*/

// let numbers =[1,1,1,1,1] //target=5 //총 합 : 11
// let target =3
// let sum =0;
// let num;
// function solution(numbers, target) {
// for (let i =0; i<arr.length; i++) {
//     sum+=arr[i]
// }
// }
// for (let i =0; i<arr.length; i++) {
//     sum+=arr[i]
// }
// num = sum-target //2
// for (let i =0; i<arr.length; i++) {

// }

//생각보다 시간이 걸렸다! 그래서 답지를 봤다! 

//답지

let numbers =[1,1,1,1,1] //target=5 //총 합 : 11
let target =3
function solution(numbers, target) {
    let answer = 0;
    //numbers.length = 5
    dfs(0, 0);
    function dfs(index, sum) {
        if(index === numbers.length) { //dfs(5,5)
            if (sum === target) { //dfs(5,3)
                answer++;
             }
            return;
        }
        //재귀 함수
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);  
    }
    
    return answer;
}

console.log(solution(numbers, target))

//출처 https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5
