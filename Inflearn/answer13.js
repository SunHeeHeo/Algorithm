let words = "StuDY";
function solution(words) {
    for (let i=0; i<words.length;i++){
        if((words[i]===words[i].toUpperCase())){
            words= words.replace(words[i],words[i].toLowerCase())
            console.log("r",words)
        }else{
            words= words.replace(words[i],words[i].toUpperCase())
        }
    }
    return words
}
console.log(solution(words))