let numbers = [1,2,3,4,6,7,8,0]
let N = [0,1,2,3,4,5,6,7,8,9]


for (let i=0; i<10; i++) {
    let answer =0;
    if(!numbers.includes(i)) {
        answer +=i
    }
    return answer
}
