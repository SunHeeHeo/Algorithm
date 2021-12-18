/*
<my idea>
1. 필터 기능 사용 몇개가 일치한지 알기
=> 최저 순위 구하기 (필터후 새 배열의 갯수; 최저 순위)
=> 최대 순위 구하기 (6 - 맞춘 배열.length 했을때 순위 )
2. 순위 구하기 while 절 아니면, for 구문으로 2번 돌려서 빈 배열에 push => 최종 답 
*/


let lottos = [44, 1, 0, 0, 31, 25]	
let win_nums = [31, 10, 45, 1, 6, 19]

// function solution(lottos, win_nums) {
//     var answer = [];
//     return answer;
// }
let arr =[]
let nums;
for(let i=0; i<lottos.length; i++){
    nums = lottos.filter((number) => win_nums[i] === number);
    arr.push(nums)
}
console.log("arr",arr)
let arr1=arr.flat()
//배열 안에 배열이 들어가는 문제 =>arr.flat()로 해결 
let minWin = arr1.length
let maxWin = win_nums.length-minWin
console.log("max",maxWin) //0

minWin = arr1.length===0? 1:minWin
maxWin = (win_nums.length-minWin) ===0 ? 6:maxWin
console.log("min",minWin)
let arr2=[]
arr2.push(maxWin,minWin)
console.log(arr2)
let answer=[]
for (let i=0; i<arr2.length;i++){
    if(arr2[i]===6){
        answer.push(1)
    }else if(arr2[i]===5) {
        answer.push(2)
    }else if(arr2[i]===4){
        answer.push(3)
    }else if(arr2[i]===3){
        answer.push(4)
    }else if(arr2[i]===2){
        answer.push(5)
    }else {answer.push(6)}
}
console.log(answer)

//예외처리: 아예 다 맞거나, 아예 다 틀린 경우가 안 나옴  => 삼항 연산자로 해결
//정답은 나오나,식별자, if 을 좀 더 간추리면 좋을 것 같음

//찾아 본 답안  
function solution(lottos, win_nums) {
    var answer = [];
    
    const correct = lottos.filter(lotto => win_nums.includes(lotto)).length; //맞았던 총 갯수
    
    const zeros = lottos.filter(lotto => lotto === 0).length; //0인 갯수 
    console.log(correct, zeros);
    
    let min = 7-correct >= 6 ? 6 : 7-correct; //맞은 갯수가 2개 미만이면 6등, 그게 아니라면, 7-맞은 갯수가 순위
    let max = min-zeros < 1 ? 1 : min-zeros; //최소 순위 -(0의 갯수)가 1보다 작으면 1등, 그게 아니라면, 최소순위 -0의 갯수를 뺀값이 최대 순위
    
    answer = [max, min]
    return answer;
}
solution(lottos, win_nums)
