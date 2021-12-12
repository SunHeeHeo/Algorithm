//홀수 중 최소값, 홀수 합 구하기

let a = "12, 77, 38, 41, 53, 92, 85"
let b = a.trim().split(', ');
let arr=[]
function soultion(b) {

    let sum=0;
    for(let i=0; i<b.length;i++){
    if(b[i]%2!==0){
        arr.push(Number(b[i]))
    }
}
arr.sort(function(a, b)  {
    return a - b;
  });
for(let i=0; i<arr.length;i++) {
    sum+=arr[i]
}
let min=arr.shift()
return [min,sum]
}

console.log(soultion(b))

//출력값이 줄바꿈 해서 나와야 하던데,
// return 즉 반환값이 나올때 줄바꿈 해서 출력 되게 하는 방법은 없을까?