// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString()
// let n = parseInt(input);
let n = 1
let numList = []
for (let i=0; i < (2*n-n);i++) {
    numList.push(n+(i+1))
}  
console.log("numList",numList)

let except =[]
for (let i=0; i< numList.length; i++) {
    let j=1
    while (j<numList[i]-1) {
        j++
        let check = numList[i]%j
        // console.log(numList[i],j,check)
        if(check===0) {
            if(!except.includes(numList[i])) {
                except.push(numList[i])
            }
        }

    }
}
console.log("except",except.length)
console.log("numList",numList.length)
console.log(numList.length-except.length)

//백준에서 나온 예제 입력 부분에서 다 통과 했는데, 왜 답안은 실패라고 뜰까?
//답지를 봐야겠다
//이유; 예제 입력들이 하나씩 입력 되는거라 생각했는데, 여러줄의 값들을 한번에 입력 받는 거였음..
//꼼꼼히 문제를 읽자!
//총 푼시간 1시간 30분

//-------------------------

//답안
let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//여러줄의 값을 한번에 입력 받는 것
inputs.pop(); //마지막 0 제거 

for (let i = 0; i < inputs.length; i++) {
    let input = Number(inputs[i]); //10
    let input2 = input * 2; //20

    let isPrimeNumber = Array(input2 + 1).fill(true); //input2+1 만큼의 true 값을 가진 배열(왜? => 0번째와 1번째는 false로 두니까, 1을 더함)
    isPrimeNumber[0] = isPrimeNumber[1] = false; // 소수가 될 수 없는 0번째와 1번째는 false로 지정해둔다.(치환)
    function PrimeNumber() {
        for(let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
          //i=2 부터 i가 input2값의 제곱근 값의 올림 된 숫자까지 i를 1씩 반복
          //왜 제곱근을 구해주는 가? //합성수
            if(isPrimeNumber[i]) {
                let m = 2;
                while(i * m <= input2) {
                  //i*(2~m) 가 input2 만큼 커질때까지 반복
                    isPrimeNumber[i * m] = false; //소수가 아닌 부분은 다 false 처리
                    m++;
                }
            }
        } 
        let results = [];
    
        for(let i = input + 1; i <= input2; i++) {
            if(isPrimeNumber[i]) { //isPrimeNumber[i]가 존재한다면,
                results.push(i); //배열에 추가
            }
        }
        console.log(results.length); //길이값을 구하면 됨
    
    }
    
    PrimeNumber();
}
// ----------------------
const input = require('fs').readFileSync('dev/stdin').toString().split("\n").map((num) => parseInt(num));

// 0~limit까지 소수구하기
const limit = 123456*2; //2n까지의 소수를 구해야하기때문이다!
let isPrime = Array(limit+1).fill(true) //limit+1 만큼의 빈 슬롯을 가진 배열
// 소수가 될 수 없는 0과 1은 false로 지정해둔다.
isPrime[0] = false;
isPrime[1] = false;
// 에라토스테네스의 체 활용
for(let i=2; i<=limit; i++){
  const root = parseInt(Math.sqrt(i))//제곱근이하로 범위제한
  for(let j=2; j<=root; j++){
    if (i !== j && i % j === 0) {
      isPrime[i] = false;
      break;
    }
  }
}


// input에서 값 받아와서 primecnt 구하기
function getPrimeCnt(num){
let cnt = 0
for(let i=num+1; i<num*2; i++){
  //num 초과 num*2 미만의 범위를 구한다.
  if(isPrime[i]) cnt++
}
  console.log(cnt)
}

for(let i=0; i<input.length; i++){
  if(input[i]===0) break;
  getPrimeCnt(input[i])
}