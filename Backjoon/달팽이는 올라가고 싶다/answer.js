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