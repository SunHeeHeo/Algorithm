// 걸린 시간 30분 내외
let left =13;
let right =17;
function solution(left, right) {
    function numbers(n) {
        let i = 0;
        let cnt = 0;
        while (i<=n) {
            if(n%i ===0) {
                cnt +=1
            }
            i+=1
        }
        return cnt
    }
    let arr =[]
    let arrNumbers =[]
    let sum =0
    for (let i =left; i<right+1; i++){
        arr.push(numbers(i))
        arrNumbers.push(i)
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2!==0) {
            arrNumbers.splice(i,1,arrNumbers[i]*(-1))
        } sum +=arrNumbers[i]
    }
    return sum
}

console.log(solution(left, right))

//야호! 통과, but 좀 간단하게 풀수 있는 바법을 찾아 봐야겠다!

// 다른 분의 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { // 제곱근이 정수면 약수의 개수는 홀수
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

