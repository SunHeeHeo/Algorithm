/*
실패율
스테이지에 도달했으나, 아직 클리어 하지 못한 플레이어의 수/ 스테이지에 도달한 플레이어 수 
시작 시간: 12시 20분 
끝난 시간: 1시 55분 
<my idea>
1. 정렬 한다.
2. 같은 수끼리 카운트 하고, key가 stage고, 카운트 된 값을 value로 하는 오브젝트 만든다.
3. 1번 stage 카운트 수/총 사용자 =num 2번은 2번 stage 카운트 수/(총 사용자 - num) 값을 구해서, 빈 배열에 push
4. value 가 0일 경우 0 처리
5. 가장 값이 높은 순의 인덱스 +1 를 구해서 push 해주면 될것 같다
---------
스텝을 더 간추릴 수 없을까?
*/

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let people = stages.length

function solution(N, stages){
    //정렬식,filter,for each 숙지하기 
    stages.sort(function(a, b) {
        return a - b;
    });
    let countObj ={};
    //배열 중복 값 개수 구하기 12345
    stages.forEach ((x) => {
        countObj[x] = (countObj[x]||0) +1;
    })
    //객체 key 갯수 구하기
    // console.log(countObj)
    let i =1
    for (let key in countObj) {
        if (Number(key) === i) {
            // console.log(countObj[key], people)
            let rate = countObj[key]/people
            people = people - countObj[key] //앞에서 삭제 해주는 이유는 value 값이 변형 되기 때문
            countObj[key] = rate
        } else if( key>i) {
            delete countObj.key;
            countObj['5']=0
        }
        i++
    }
    
    let sortable = [];
    for (var key in countObj) {
        if(Number(key)>5) {
            delete countObj.key
            break // 눈물 겨운 break.. 왜 delete이 안되는거야 ㅠㅠ delelte을 해도 마지막 값이 들어가짐.
        }
        sortable.push([key, countObj[key]]);
    }
    sortable.sort(function(a, b) {
        return b[1]-a[1];
    });
    // console.log(sortable)
    let result=[];
    for (i =0; i<sortable.length; i++){
        result.push(Number(sortable[i][0]))
    }
    console.log(result)
return result
}

console.log(solution(N, stages))

//첫번째는 통과했는데, 두번째는 통과 못함..
//참고 했던 답
let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
function solution(N, stages) {
    let stageRatio = [];
    let users = stages.length; //사람의 총 수 
    
    for(let i = 1; i <= N; i++) { //i = 1,2,3,4,5
        let noClear = stages.filter((user) => i === user).length; //filter 함수로 5 이상인 stage는 삭제 
        //i와 같은 수를 stages 배열에서 찾고, 그 갯수를 보내줌.(나는 어렵게 for 구문을 다 돌렸는데, 이렇게 filter 함수로 쉽게 찾을 수 있구나!)
        console.log(noClear)
        let ratio = noClear/users; //실패율 
        users -= noClear; //사람의 수를 삭제 
        stageRatio.push({stage:i, ratio:ratio}); //배열안 객체 생성 key 값은 i, value 값은 ratio로 
    }
    
    stageRatio.sort((a, b) => {
        if(a.ratio === b.ratio) return a.stage - b.stage; //실패율이 동일하면, 오름차순 
        else return b.ratio - a.ratio; //내림차순으로 정렬 
    });
    
    return stageRatio.map(obj => obj.stage);
}

console.log(solution(N, stages))

//답안 출처 https://onlydev.tistory.com/58