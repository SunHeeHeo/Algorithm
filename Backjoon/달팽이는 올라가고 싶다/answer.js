// while 구문을 잘 써야 겠네!
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[1]);
let V = parseInt(input[2]);
let i =1
let climbing= A-B
while (true) {
    let result = A + climbing
    climbing = result - B
    i++
    if (result>V || result==V) {
        console.log("i",i)
        break
    }

}

//시간 초과라고 뜨네..ㅎㅎ
/* 
단순히 반복문을 돌려 해결할 수도 있지만 시간 복잡도 때문에 시간 초과가 나게 됩니다.

정상에 도착하면 미끄러지지 않고 그 즉시 끝나게 되니 정상(높이)에서 밤에 미끄러지는 수를 빼주면 됩니다.
즉 (높이 - 밤에 미끄러지는 수) 값까지 만 올라가면 됩니다.

그리고 아침에는 위로 이동을 하지만 밤에는 미끄러지니 결국 하루에 이동하는 값은
(아침에 이동하는 수 - 밤에 미끄러지는 수)가 될 것입니다

결과 값이 딱 떨어지지 않는 수가 나오면 하루가 더 필요하다는 뜻이므로
Math.ceil 메서드를 사용해 올림을 해서 하루를 더해줍니다

*/

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = input[0];
const B = input[1];
const V = input[2];
 
console.log(Math.ceil((V - B) / (A - B)));

//https://gurtn.tistory.com/52