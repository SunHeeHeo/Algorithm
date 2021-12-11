/* 
소요시간 약 60분
1. 각수의 소수 구하기
2. 소수의 공통 곱 : 최대 공약수
3. 소수의 공통 된 곱 * 각 수의 나머지의 곱 : 최대 공배수 
*/
let a = 24;
let b = 18;
let c = [a,b]
let decimal =[];

for (let i=0; i<c.length; i++){
    for (let j=2; j<c[i];j++) {
        if(c[i]%j === 0){
            decimal.push(j)
        }
    }
}
decimal=decimal.sort((a,b)=>{return a-b})
console.log("d",decimal)

//공통된 수는 곱해서 => 최대 공약수
//비교해서 같으면 shift로 값 삭제 하고 변수에 저장하기
let k=[]
for (i=0; i<decimal.length; i++){
    if(decimal[i] === decimal[i+1]) {
        let common = decimal.splice(i,1)
        k.push(common)
    } 
}
// console.log(decimal)
// console.log(k)
//최대 공약수 
let max=Math.max.apply(null,k)
//최소 공배수 
let min = max*(a/max)*(b/max)
console.log(max,min)
