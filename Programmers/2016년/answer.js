//소요시간 40분

let a = 5;
let b = 24;

function solution(a, b) {
  let date;
  let day;
  let sum = 0;
  function howManyDays(a, b) {
    function days(a) {
      for (let i = 1; i < a; i++) {
        if (i == 8) {
          date = 31;
          sum += date;
        } else if (i == 2) {
          date = 29;
          sum += date;
        } else if (i % 2 == 1) {
          date = 31;
          sum += date;
        } else {
          date = 30;
          sum += date;
        }
      }
      return sum;
    }
    sum = days(a);
    return b + sum;
  }
  let i = howManyDays(5, 24);
  if (i % 7 == 1) {
    day = "FRI";
  } else if (i % 7 == 2) {
    day = "SAT";
  } else if (i % 7 == 3) {
    day = "SUN";
  } else if (i % 7 == 4) {
    day = "MON";
  } else if (i % 7 == 5) {
    day = "TUE";
  } else if (i % 7 == 7) {
    day = "WED";
  } else {
    day = "THU";
  }
  //   console.log(day);
  return day;
}

//정확성 14.3 ㅠ

//다른분이 푸신 것
function solution(a, b) {
  let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`2016-${a}-${b}`);
  let day = date.getDay();
  return arr[day];
}

function solution(a, b) {
  let answer = "";
  let monthEnd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let temp = 0;
  for (let i = 1; i < a; i++) {
    temp += monthEnd[i - 1];
  } //월의 일 구하기
  temp += b - 1; //b 더해서 총 일수 구하기
  answer = arr[temp % 7]; //총 일수를 7로 나눈 나머지를 arr로 인덱스로 해서 요일을 구함
  return answer;
}
//두번째는 채점 돌려보니까 실패라고 뜸..?
console.log(solution(a, b));
