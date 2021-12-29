let input = `5
teatcher
time
student
beautiful
good` 
let inputSplit = input.toString().split('\n');
let arr=[]
function solution(inputSplit){
    for(let i =0; i<inputSplit.length;i++){
        arr.push(inputSplit[i].length)
    } 
    let max=Math.max.apply(null,arr)
    let index= arr.indexOf(max)
    let answer = inputSplit[index]
    return answer
}
solution(inputSplit)