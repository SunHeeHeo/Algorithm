//중복문자제거 
let word ="ksekkset"
let n =0
function solution(word){  
    let answer="";
    for(let i=0; i<word.length; i++){
      if(word.indexOf(word[i])===i) answer+=word[i]; 
      console.log(word.indexOf(word[i]),i,word.indexOf(word[i])===i) //doulbe check 필요!
      //처음발견된 것만 answer에 추가
    }
    return answer;
}
console.log(solution("ksekkset"));