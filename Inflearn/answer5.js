//최솟값 구하기
/*소요시간 8분*/

let a = "5 3 7 11 2 15 17"
let b = a.trim().split(' ');
let arr =[]

function solution(a){
    for (let i=0; i<b.length; i++) {
        arr.push(Number(b[i]))
    }
    arr.sort(function(a, b)  {
        return a - b;
      });
    let min = arr.shift()
    return min
}

console.log(solution(a))