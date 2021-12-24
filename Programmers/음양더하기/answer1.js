/*
내가 생각한 구현 방법 
for 구문을 돌려서, false 이면, -로 치환,
합 구하기
*/
let absolutes = [1,2,3]	
let signs = [false,false,true]	

function solution(absolutes, signs) {
    let sum =0
    for (let i =0; i<absolutes.length; i++){
        if(signs[i]===false) {
            absolutes.splice(i,1,-absolutes[i])
        }
        sum += absolutes[i]
        // console.log(sum)
    } return sum
}
console.log(solution(absolutes, signs))