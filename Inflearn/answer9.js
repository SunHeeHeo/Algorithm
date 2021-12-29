let word ="BANANA";
function solution(word){
    let regaxForA =/A/gi;
    let answer =word.replace(regaxForA,"#")
    // for(let i=0; i<word.length;i++){
    //     if(word[i]==='A') {
    //         word.splice(i,1,"#")
    //     }
    // }
    return answer
}
console.log(solution(word))

//잊지말자! splice 는 배열에서만 쓸수 있는 메소드다!