// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString()
// let n = parseInt(input);
let n = 100000
let numList = []
for (let i=0; i < (2*n-n);i++) {
    numList.push(n+(i+1))
}  
console.log("numList",numList)

let decimal =[] 
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
//총 푼시간 1시간 30분