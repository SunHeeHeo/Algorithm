//중복단어제거 

let input = `5
good
time
good
time
student` 
let answer=""
let inputSplit = input.toString().split('\n');
inputSplit.shift()
function solution(inputSplit){
    for (let i =0; i<inputSplit.length; i++){
        if(inputSplit.indexOf(inputSplit[i])===i) answer+=inputSplit[i]+"\n";
    }
    answer =answer.slice(0,17)
    console.log(answer)
    return answer
}
solution(inputSplit)