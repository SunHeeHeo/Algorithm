/*소요시간 :22분
1차 복습 :12월 13일
*/

let s ="So when I die (the [first] I will see in (heaven) is a score list)."
let brackets = s.replace(/[^\(\)\[\]]/g, "")
let arr=[]
let answer;

if(!brackets.length) { //brackets이 비어있다면 괄호가 없다는 뜻이므로, "yes" 출력
    answer="yes1"
} 
console.log(brackets.length)
for (let i =0;i<brackets.length;i++){ 
    if(brackets[i]==="(" || brackets[i]==="["){ //brakets 안의 문자가 ( 혹은 [ 으로 시작한다면, 
        arr.push(brackets[i]) //arr 배열에 푸시
    }else { //그게 아니라면
        if(arr[arr.length-1]==='[' && brackets[i]===']'){ //arr 배열의 마지막 요소와 brackets의 해당 요소와 짝인지 확인
            arr.pop(brackets[i-1]) //같다면, arr 배열에 있는 마지막 요소를 pop
        }else if(arr[arr.length-1]==='(' && brackets[i]===')') { //위와 같은 과정
            arr.pop(brackets[i-1])
        }else {
            answer="no1" //짝을 이루지 못한다면 no를 출력
        }
    }
}

if(arr.length!==0){ //for 구문을 다 빠져 나왔는데, arr 배열에 요소가 남아 있다면 짝을 이루지 못했다는 거 이므로, no 를 출력
    answer="no2"
}else {
    answer="yes2" //arr 배열에 어떠한 것도 남아 있지 않았다면 yes를 출력
}
console.log(arr,answer)

