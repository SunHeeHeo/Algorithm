let arr = [4, 5, 2, 6];
function solution(arr) {
  let answer = [];
  if (arr.length === 1) {
    answer.push(-1);
  } else {
    let Arr = [];
    Arr = Arr.concat(arr); //원래 Arr = arr 해버리니, arr을 정렬해버리면, Arr배열까지 바뀌어 버렸다. 그래서 concat을 이용해서 배열안에 배열을 넣는 형태로 바꿈
    arr.sort(function (a, b) {
      //배열을 내림차순으로 정렬
      return b - a;
    }); //arr을 정렬후
    let min = arr.pop(); //맨 마지막수가 가장 작으니까 pop메소드를 써서 작은 수를 추출
    let index = Arr.findIndex((v) => v === min); // 가장 작은수를 Arr의 배열에서 인덱스를 찾음
    Arr.splice(index, 1); //그 수를 배열에서 삭제
    answer = Arr;
  }
  return answer;
}

solution(arr);

//1차 시도 => 왜 실패가 뜨징? => 정렬을 해버리면, 원래 배열의 요소 자리가 완전히 바뀌구나!!

// 다른분이 푼것
function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  const minValue = Math.min.apply(null, arr); //math 메소드를 통해서 최솟값을 구함
  const index = arr.findIndex((value) => value === minValue); //최소값의 인덱스를 구해서
  arr.splice(index, 1); //배열에서 삭제
  return arr;
}
