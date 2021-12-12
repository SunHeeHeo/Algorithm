// 세 수 중 최솟 값
let a= 6;
let b= 15;
let c =11;
let min;
function solution(a,b,c) {
    if (a<b){
        if(b<c) {
        }else if (a>c) {
            min = c;
        }else {
            min =a;
        }
    } else {
    min =b;
    }
    return min 
} 
solution(a,b,c)

//else 일때도 {} 해줘야 정확한 답이 나오구나!
//좀 더 효율 적인 방법을 찾아보자!
