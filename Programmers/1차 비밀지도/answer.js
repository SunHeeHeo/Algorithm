let n = 5;
let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  let result1 = [];
  let result2 = [];
  for (let i = 0; i < n; i++) {
    result1.push(arr1[i].toString(2));
    result2.push(arr2[i].toString(2));
    if (result1[i].length !== 5) {
      result1.splice(i, 1, "0".repeat(n - result1[i].length) + result1[i]);
    }
    if (result2[i].length !== 5) {
      result2.splice(i, 1, "0".repeat(n - result2[i].length) + result2[i]);
    }
  }
  let result = [];

  for (let i = 0; i < n; i++) {
    let secret = "";
    let a = [];
    for (let j = 0; j < n; j++) {
      a = "";
      // console.log(result1[i][j], result2[i][j]);
      if (result1[i][j] === "0" && result2[i][j] === "0") {
        secret += " ";
      } else {
        secret += "#";
      }
    }
    result.push(secret);
  }
  return result;
}
console.log(solution(n, arr1, arr2));

//뿌엥 정확도 75프로 ㅠㅠ

//다른 분이 푸신 것
function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    // toString(2)은 이진수로 반환하는 것.
    const bin = (arr1[i] | arr2[i]).toString(2); //흠...ㅎㅎ 이해가 안되는디?
    console.log(bin);
    let line = [];
    for (let j = bin.length - n; j < bin.length; j++) {
      // j가(인덱스값)이 -1일 경우 undefined 반환.
      if (bin[j] === "1") {
        // 1이면 '#', 그 외 ' '
        line.push("#");
      } else {
        line.push(" ");
      }
    }
    answer.push(line.join(""));
  }
  return answer;
}
console.log(solution(n, arr1, arr2));

//2
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let first =
      "0".repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
    let second =
      "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);

    let temp = "";
    for (let j = 0; j < n; j++) {
      if (first[j] === "1" || second[j] === "1") {
        temp += "#";
      } else if (first[j] === "0" && second[j] === "0") {
        temp += " ";
      }
    }
    answer.push(temp);
  }
  return answer;
}
/*나는 arr1, arr2 각각의 2진법 배열을 만들어 주었지만, 위에, 푼 답은, 나처럼, 배열을 한 번 더 만들어 주지 않고, 
for 구문에서 이진법으로 변환하고, 바로 # or ""로 변환 해줘서
더 간결하고, 심플하게 푼거 같다.*/
