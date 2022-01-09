function solution(s, n) {
  let answer = "";
  // s = s.split(" ").join("");
  let lowerLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let upperLetter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer += " ";
      continue;
    }
    //   console.log(lowerLetter.indexOf(s[i]));
    if (lowerLetter.indexOf(s[i]) === -1) {
      let b = upperLetter.indexOf(s[i]);
      if (b + n > 25) {
        answer += upperLetter[b + n - 26];
      } else {
        answer += upperLetter[b + n];
      }
    } else {
      let a = lowerLetter.indexOf(s[i]);
      if (a + 1 > 25) {
        answer += lowerLetter[a + n - 26];
      } else {
        answer += lowerLetter[a + n];
      }
    }
  }
  return answer;
}
let s = "a B z";
let n = 4;
console.log(solution(s, n));

//정확도 30 ㅠㅠ 뿌엥..
//다른사람풀이
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
//삼중 조건문을 썼고, 나보다 더 깔끔하게 쓰신것 같다.
