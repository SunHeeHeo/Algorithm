let arr = [4, 5, 2, 6];
function solution(arr) {
  let answer = [];
  if (arr.length === 1) {
    answer.push(-1);
  } else {
    let newArr = arr.sort(function (a, b) {
      //배열을 내림차순으로 정렬
      return b - a;
    });
    console.log(newArr);
    let min = newArr.pop(); //맨 마지막수가 가장 작으니까 pop메소드를 써서 삭제
    console.log(min);
    let index = arr.findIndex((v) => v == min);
    console.log(index);
    arr.splice(index);
    answer = arr;
  }
  console.log(answer);
  return answer;
}

solution(arr);

//왜 실패가 뜨징? => 정렬을 해버리면, 원래 배열의 요소 자리가 완전히 바뀌구나!!

//다른분이 푼것
// function solution(arr) {
//   if (arr.length === 1) {
//     return [-1];
//   }
//   const minValue = Math.min.apply(null, arr); //math 메소드를 통해서 최솟값을 구함
//   const index = arr.findIndex((value) => value === minValue); //최소값의 인덱스를 구해서
//   arr.splice(index, 1); //배열에서 삭제
//   return arr;
// }
