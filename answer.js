clothes=([["yellowhat", "headgear"], 
["bluesunglasses", "eyewear"], 
["green_turban", "headgear"]])
function solution(clothes) {
    var answer =1;
    let sort ={};
    for (let cloth of clothes) { //for (variable of iterable) {statement} variable: 각 반복에 서로 다른 속성 값이 할당// iterable : 반복되는 열거 가능한 속성이 있는 객체
        if(sort[cloth[1]]) { //cloth =[key:value] , cloth[1] = value
            sort[cloth[1]]++; // value 값이 있다면 1 더하기 
        }else {
            sort[cloth[1]] =1; //value 값이 없다면 key값과 value 1 추가
        }
    }
    for(let i of Object.keys(sort)) { //Object.keys()는 객체의 key 값만 출력
        // console.log(sort[i])
        answer*=sort[i]+1 //이 부분을 좀 더 확실히 이해 할 것!
        console.log(answer)
    }
    return answer -1;
}
solution(clothes)
