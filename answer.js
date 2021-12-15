/*
가장 관건은, 같은 수가 있을때, 구별하고
순서를 어떻게 낼껀지 
*/
function solution(people, limit) {
    var answer = 0;
    return answer;
}

//
function solution(priorities, location) {
    let max
    let cnt = 0;
    let i = priorities.indexOf(max);
    
    while(true) {
        max = Math.max.apply(null, priorities); //max값을 계속 구함
        i = i % priorities.length; //인덱스는 0 ~ (priorities의 길이-1) 만큼

        if (priorities[i] === max) { //현재 요소가 max값과 같으면
            cnt++; //pop의 의미로 cnt를 1증가시킴
            priorities[i] = -1 //max값을 -1로 만들어버림

            if (i === location) { //만약 인덱스가 location과 같다면
                return ++cnt; //pop후 return 하므로 ++cnt를 return 해준다.
            }
        }
        i++; // 현재 요소가 max값과 다르면 인덱스를 1증가시킨다.
    }
}