let n = 5
let lost =[3]
let reserve = [1]
//내가 푼 것 
function solution(n, lost, reserve) {
    function findNumber(num) {
        if(lost.filter(i=> (i===num+1||num-1).length)){
            return true
        } else{
            return false
        }
    }
    for (let i=0; i<reserve.length;i++) {
        if(findNumber(reserve[i])){
            lost.splice(lost.indexOf(reserve[i]),1)
        }
    }
    let cnt =n-lost.length
    return cnt 
}


//결과는 정확성 70프로로 탈락.ㅠㅠ
//다른분이 푸신것을 참고 해보자!

function solution(n, lost, reserve) {  
    const noDupleLost = lost.filter( (s) => (reserve.indexOf(s) === -1)) //reserve에 없는 요소만 filter 해서 noDupleLost의 변수에 할당
    const noDupleReserve = reserve.filter( (s) => (lost.indexOf(s) === -1)) //lost에 없는 요소만 filter 해서 noDupleReserve의 변수에 할당
    
    noDupleLost.sort() //정렬
    var answer = n-noDupleLost.length //체육복을 잃어 버린 학생 수 구하기
    noDupleLost.forEach(lostStudent => {
  
      if (noDupleReserve.indexOf(lostStudent-1) >= 0) { //noDuleLost 요소 -1의 값이 noDubpleReserve에 하나라도 있으면,
        answer ++ //체육복을 잃어 버린 학생수에 +1
  
      } else if (noDupleReserve.indexOf(lostStudent+1) >= 0) { //noDuleLost 요소 +1 의 값이 noDubpleReserve에 하나라도 있으면,
          answer ++ //체육복을 잃어 버린 학생수에 +1
          var reserveStudent = noDupleReserve.indexOf(lostStudent+1)
          noDupleReserve.splice(reserveStudent, 1) //noDubpleReserve에서 체육복을 빌려준 친구의 번호를 삭제
      }
    })
    return answer;
  }

  //나와 다른 점은,lost와 reserve 요소가 같은 번호를 먼저 filter 메소드로 걸러 주었고,(여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.)
  //그리고 나는 체육복을 도난 당한 학생이 체육복을 빌릴수 있으면 도난 당한 학생 배열에서 splice해주었는데, 이 분은 체육복을 빌려준 학생의 번호를 splice 해서 없애줬다!

  //출처: https://deok2kim.tistory.com/45