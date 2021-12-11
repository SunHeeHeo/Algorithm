/*
소요시간 대략 1시간 5분
<my idea>

point)
스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때, 
서로 다른 옷의 조합의 수를 return 하도록 하기!
1. 의상의 수는 1개 이상 30개 이하
2. 같은 이름을 가진 의상은 존재 하지 않음
3. 각 행은 [의상의 이름, 의상의 종류]로 이뤄져 있음
---
1. 의상 종류별 아이템을 모으고 정렬한다 /키 값으로 인덱싱 사용.
2. 의상의 총 갯수를 구한다.
3. 카테고리별 조합의 가능성을 구한다.
*/

let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
let category ={}
function solution(clothes) {
    var answer = 0;
    return answer;
}
//1. 카데고리별 의상 아이템 모으기 /인덱싱으로 찾고, for 구문, if문으로 같은지, 해싱처리 해주기
for (let i=0; i<clothes.length; i++) {
    category[i] =[]
}
let i = clothes.length -1
for (let i=0; i<clothes.length; i++) {
    for (let j=0; j<clothes.length; j++) {
        if(i===j){ //02 01 //12 11
            continue
        }else if (clothes[i][1]===clothes[j][1]){ //01 11
            category[i].push(clothes[j][0])
            category[i].push(clothes[i][0]) //1
        }else {
            category[i].push(clothes[j][0])
        }
    }
}
console.log(category)

//1. 의상아이템 모으고 정렬하는 것 부터 막힘^^ ㅎㅎ 답지 봐야지

let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
//return 5 
function solution(clothes) {
    let answer = 1;
    let obj = {};
    for (let i =0 ; i<clothes.length; i++)
        {
           obj[clothes[i][1]] = (obj[clothes[i][1]]||1) + 1
           console.log(obj[clothes[i][1]])
        }
        for(let key in obj)
        {
            answer *= obj[key]
        }
    return answer-1;
}

console.log(solution([["yellowhat", "headgear"], 
["bluesunglasses", "eyewear"], 
["green_turban", "headgear"]]))

//[출처](https://github.com/eternalclash/Algorithm-JS/blob/main/%EC%8A%A4%ED%84%B0%EB%94%94/%EC%9C%84%EC%9E%A5.js)

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
        answer*=sort[i]+1 //sort[keys] 즉 얻는 값은 sort 객체의 value 값 

    }
    return answer -1;
}