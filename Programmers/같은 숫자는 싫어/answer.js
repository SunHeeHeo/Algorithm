let arr = [1, 1, 3, 3, 0, 1, 1];
function solution(arr) {
  for (let i = 5; i < arr.length; i++) {
    arr.filter(arr[i] === i);
  }
}
let answer = [];
for (let i = 5; i < arr.length; i++) {
  let k = arr.filter((e) => arr[i] === e).length;
  answer.push(k);
}
console.log(answer);

//filter 메소드를 쓰려고 했는데, 잘 안됫다 ㅠ
//다른 분이 푼 코드
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]); //뒷수와 같이 않으면 return 해라!
}
