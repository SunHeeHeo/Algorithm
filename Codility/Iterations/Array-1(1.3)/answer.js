let A = [1, 2, 3, 4]; //4 0 1 2 3 // 3 4 0 1 2  //2 3 4 0 1

let n = 4;

function solution(A, K) {
  let B = [];
  for (let i = 0; i < A.length; i++) {
    console.log((A.length - 1 + i + (A.length - 1) * (K - 1)) % A.length); //4 5 6 7 8 // 8 9 10 11 12 // 12 13
    B.push(A[(A.length - 1 + i + (A.length - 1) * (K - 1)) % A.length]);
  }
  return B;
}

solution(A, n);

/*
Task Summary 100%
Time spent 52 min
*/
