/* idea
1. for 구문으로 participant 배열을 돌리고,
2. completion 배열의 값과 같은지 보고, 
3. 같다면, pop 하기
*/
//내가 짠 코드 
function solution(participant, completion) {
    for (let i =0; i<completion.length; i++) {
        for (let j =0; j<participant.length; j++) {
            if(completion[i] !== participant[j]){
                continue
            } else {
            participant.splice(j,1)
            break}
        }
    }
    var answer = participant;
    return answer;
}

participant = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]

solution(participant, completion)

/* 걸린 시간 : 25분
어려웠던점 : 배열에 특정한 값을 삭제 할때, splice인데, splice로 해서 원하는 값이 안나왔다
vs code로 돌렸을 땐, 잘 나오는데, 
프로그래머스로 돌렸을때 시간초과라고 뜬다.
무슨 문젤까? => 참여한 선수의 수가 100,000명 이하로 주어진 것으로 보아, 시간 복잡도를 고려 했어야 했다.
2중으로 for 문을 돌리면 시간 초과에 걸린다고 한다!
*/

//참고했던 답안 
function solution(participant, completion) {
    participant.sort(); //참가자 배열 정렬
    completion.sort(); //완주자 배열 정렬
    for(var i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            //인덱스 0부터 순차적으로 두 배열 비교
            return participant[i];
            //비완주자가 참가자 배열에 나올 경우 출력
        }
    }
}

/*여기에서 tip은 배열을 모두 sort()를 먼저 해줘서, 정렬을 시켰다.
그리고, 인덱스 0 부터 두 배열을 비교하면, for문 한번으로 문제 해결을 할수 있다!
여기에서 핵심은, 정렬을 시켜서 for 구문을 1번 돌리는 것!
내가 이해 안됫던 부분은, 두개의 배열의 길이가 다른데, 인덱스 값이 다른 경우는 어떻게 하나의 문제 였는데,
문제를 자세히 보니, 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다. -> 한 명만 찾으면 되는 거였다!
해시가 무엇인지 공부할 것!
*/