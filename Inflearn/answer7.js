/*7부제 
주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력
소요시간 8분 
*/
let date = 3;
let car = "25, 23, 11, 47, 53, 17, 33";
let carNumber=car.trim().split(", ")
let arr=[]
// console.log(Number(carNumber[0][1]))
function solution(carNumber) {
    for (let i=0; i<carNumber.length;i++){
        if(date===Number(carNumber[i][1]))  {
            arr.push(carNumber[i])
        }
    }
    answer=arr.length
    return answer
}
console.log(solution(carNumber))
