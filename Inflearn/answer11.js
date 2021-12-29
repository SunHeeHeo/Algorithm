let words = "KoreaTimeGood";
let cnt=0
function solution(words) {
    for(let i=0;i<words.length;i++){
        if(words[i]===words[i].toUpperCase()){
            cnt+=1
        }
    }
    return cnt
}
console.log(solution(words))
