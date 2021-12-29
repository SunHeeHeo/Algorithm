let word = 'index'
let index;
let answer;
function solution(word){
    if(word.length%2!==0) {
        index=parseInt(word.length/2)
        answer=word[index]
    }else{
        index=parseInt(word.length/2)
        answer=word[index-1]+word[index]
    }
    console.log(answer)
    return answer

}

solution(word)