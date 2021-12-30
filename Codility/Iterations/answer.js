/* 소요시간 30min */
let N =32;
function solution(N) {
    let binary = N.toString(2)
    let arr =[]
    let newArr=[]
    for(let i =0; i<binary.length;i++){
        if(binary[i]==='1'){
            arr.push(i)
        }
        if(arr.length>2){
            for(let j=0; j<arr.length; j++) {
                newArr.push(arr[j+1]-arr[j]-1)
            }
        }
    }
    newArr.sort(function(a,b) {
        return b-a;
    })
    let answer = newArr.shift()
    if(answer===undefined){
        answer=0
    }
    return answer
}

console.log(solution(N))

//total Score : 53%


