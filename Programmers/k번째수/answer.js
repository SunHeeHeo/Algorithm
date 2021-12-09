/* 전략
1. 슬라이스 하고,
2. 정렬하고
3. 관련된 인덱스 값 구하기 
*/

function solution(array, commands) {
    let answer = [];
    for (let i=0; i<commands.length; i ++){
        let slicing =array.slice(((commands[i][0])-1),(commands[i][1]))
        let sortSlicing = slicing.sort() // sort() 이 부분을 sort((a,b)=>{return a-b}); 지정 해주니 된다!
        let result = sortSlicing[commands[i][2]-1]
        answer.push(result)
    }
    console.log(answer)
    return answer;

}


/* 이 문제는 인덱스의 정확한 개념과 슬라이싱을 물어보는 문제 인거 같다!
문제 총 푼 시간 30분 
시간이 좀 지체 되었던 이유는 문제를 제대로 읽지 않아서, 인덱싱 지정 하는 부분을 잘못 주어서 헤맸다.
결과 

테스트 1 〉	통과 (4.87ms, 30.5MB)
테스트 2 〉	실패 (4.63ms, 30.5MB)
테스트 3 〉	통과 (4.59ms, 30.5MB)
테스트 4 〉	통과 (4.97ms, 30.4MB)
테스트 5 〉	통과 (4.61ms, 30.6MB)
테스트 6 〉	통과 (4.57ms, 30.3MB)
테스트 7 〉	통과 (4.78ms, 30.4MB)
채점 결과
정확성: 85.7
합계: 85.7 / 100.0
*/

//조건 주는 부분 정확하지 않아, 틀린 곳이 있는 것 같다.

//모범 답안 
function solution(array, commands) {
    var answer = [];
    
    for(var i=0; i<commands.length;i++){
        var list = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>{return a-b}); 
        //.sort까지 이해가는데 sort(a,b) => return a-b가 이해가 안됨!
        /*
        score.sort(function(a, b) { // 오름차순
            return a - b;
        }); //이게 오름차순으로 나타내는 sort 메소드라고 한다!

        */

        answer.push(list[commands[i][2]-1]);
    }
    console.log("answer",answer)
    return answer;
}

let array =[1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
solution(array,commands)


/*arr.sort([compareFunction])
compareFunction : 정렬 순서를 정의 하는 함수, 생략하면, 각 요소의 "문자열 변환"에 따라 각 문자의 유니코드 코드 포인트값에 따라 정렬
숫자 정렬에서는 9가 80보다 앞에 오지만, 숫자는 문자열로 변환되기 때문에 80은 유니코드 순서에서 9 앞에 옵니다 
: 그래서 오류가 났던 거임!
참고 문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

문자정렬
var fruit = ['orange', 'apple', 'banana'];

일반적인 방법 
fruit.sort(); // apple, banana, orange

숫자 정렬
var score = [4, 11, 2, 10, 3, 1]; 

오류 
score.sort(); // 1, 10, 11, 2, 3, 4 
              // ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음

정상 동작
score.sort(function(a, b) { // 오름차순
    return a - b;
    // 1, 2, 3, 4, 10, 11
});

score.sort(function(a, b) { // 내림차순
    return b - a;
    // 11, 10, 4, 3, 2, 1
});

Object 정렬
var student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]

*이름순으로 정렬*
student.sort(function(a, b) { // 오름차순
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    // 광희, 명수, 재석, 형돈
});

student.sort(function(a, b) { // 내림차순
    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
    // 형돈, 재석, 명수, 광희
});

*나이순으로 정렬*
var sortingField = "age";

student.sort(function(a, b) { // 오름차순
    return a[sortingField] - b[sortingField];
    // 13, 21, 25, 44
});

student.sort(function(a, b) { // 내림차순
    return b[sortingField] - a[sortingField];
    // 44, 25, 21, 13
});

참고 블로그 : https://dudmy.net/javascript/2015/11/16/javascript-sort/
*/