let a =[6,10,20,15,25,10,20] //시작점은 계단에 포함 되지 않는다. , 마지막 도착 계단은 반드시 밟아야 한다.
//연속된 세 개의 계단을 모두 밟아서는 안된다.
//각 계단에 쓰여 있는 점수가 주어질때 이 게임에서 얻을수 있는 총 점수의 최대 값을 구하는 프로그램 

//마지막 계단을 밟아야 한다 => 마지막 수는 pop 시키기 
//6,10,20,15,25,10
let c = a.pop()
console.log("c",c)

let b ={}

for (let i=0; i<a.length;i++) {
    b[i] = a[i]
}
console.log("b",b)
let scores =[]
for (var score in b ) {
    scores.push([score,b[score]]);
}

scores.sort(function(a,b) {
    return  b[1]-a[1];
})
let arr =[]
for (let i =0; i<scores.length;i++){

}

console.log("1",scores)

//마지막 값은 pop 해주고, 
//각 인덱스값을 키값으로, 객체를 구성하고, 오름차순으로 정렬 해줬다. 그래서 비교하면서 합을 구하려고 했는데
//1시간정도 고민 해본거 같아 답지를 봐야겠다..ㅋ큐ㅠ
const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +n;
const stairs = arr.map(v => +v);
let dp = [[0, 0], [stairs[0], stairs[0]]];
// [i][0] 아래 계단 안 밟았을 떄,
// [i][1] 아래 계단 밟았을 때 



for (let i = 2; i <= stairs.length; i++) {
  dp.push([]);
  dp[i][0] = Math.max(dp[i - 2][1], dp[i - 2][0]) + stairs[i - 1];
  dp[i][1] = dp[i - 1][0] + stairs[i - 1];
}

console.log(Math.max(...dp[dp.length - 1]));


const n = +input[0]; //이게 어떤 뜻일까?
const stairs = input.filter((v,i) => i >0).map((v)=>+v);
stairs.unshift(0);
if(n==1) console.log(stairs[1]);
else if (n==2) console.log(stairs[1]+staris[2])
else if (n==3) 
    console.log(Math.max(staris[1]+stairs[3],stairs[2]+stairs[3]))
else {
    const dp= Array.from({length:n+1},() =>0);
    dp[1] = stairs[1];
    dp[2] = stairs[2];
    dp[3] = Math.max(stairs[1]+stairs[3],stairs[2]+stairs[3])
    for (let i=4; i<=N; i++) {
        dp[i] = Math.max(dp[i-2],dp[i-3]+stairs[i-1]) +stairs[i];
    }
    console.log(dp[n])
}

//[출처] https://lhoiktiv.tistory.com/m/156