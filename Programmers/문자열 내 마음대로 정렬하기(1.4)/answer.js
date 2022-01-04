let string = ["sun", "bed", "car"];
let n = 1;
let letters = {};
string.map(function (str, idx) {
  letters[idx] = str[n];
});
let arr = [];
for (let idx in letters) {
  arr.push([idx, letters[idx]]);
}
arr.sort(function (a, b) {
  return a[1] - b[1];
});
console.log(arr);

/*What i tried was using filter method to find the each letter of the word and the index.
but it was not easy because, i couldn't get the index with the filter method
Maybe i might need to pratice the filter method*/

function solution(strings, n) {
  strings.sort(function (a, b) {
    var first = a[n];
    var second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });
  return strings;
}
//The Site that i've got the answer : https://wooder2050.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4-%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-javascript-f8f431cedee7
