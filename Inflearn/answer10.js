let words ="COMPUTERPROGRAMMING"
let char = "R"
let cnt =0

function solution(words,char){
    for(let i=0; i<words.length; i++) {
        if(words[i]===char){
            cnt+=1
        }
    }
    return cnt

}
console.log(solution(words,char))