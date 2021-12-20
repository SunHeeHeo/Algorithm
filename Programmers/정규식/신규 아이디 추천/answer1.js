/*
1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
<my idea>
filter 기능을 잘 사용 해야 할 것 같다.  => filter기능 배열만 쓸수 있음.
단계는 많지만 잘 사용하면, 간단하게 풀릴 문제인거 같은데..
5단계 -> 1단계 -> 2단계 
3단계 -> 4단계-> 6단계
7단계
*/
let new_id = "..._1 !@BaT#*..y.abcdefghijklm"

function solution(new_id) {
    var answer = '';
    return answer;
}

//5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
let pattern =/[1-10-_.]/g
new_id = new_id.replace(/ /gi,"a") 
//1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
new_id = new_id.toLowerCase()
//2단계 new_id에서 알파벳 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
new_id = new_id.replace(/[^a-z\\1-10\\-_.]/g,"")
new_id = new_id.replace(/ /gi,"") 
//3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// let cnt = new_id.match(/../g) => 이걸 replace 해주면 안될까?
//4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
if (new_id[0]===".") {
    new_id=new_id.slice(1)
}
if (new_id[-1]==="."){
    new_id=new_id.slice(0,new_id.length-2)
}
/*6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다. */
//splice는 배열을 자르는 거임 
if(new_id.length>=16){
    new_id=new_id.substr(0,15)
    if(new_id[-1]===-1){
        new_id=new_id.substr(0,14)
    }
}

// 이 문제는 정규식과, replace, slice와, 인덱스를 잘 이용하는 문제구나! step3 에서 막혔다.


//답안 
function solution(new_id) {    
    const answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')  //word 문자 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
        .replace(/\.{2,}/g, '.') //.이 최소 2개 이상이면 .로 치환
        .replace(/^\.|\.$/g, '') //문장의 시작 또는 끝이 .로 시작하면 삭제
        .replace(/^$/, 'a') //^$/ 처음부터 끝까지 빈 문자열을 뜻하는 건가?**
        .slice(0, 15).replace(/\.$/, ''); //15자리까지 자름
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); //최소 숫자가 2개 이하라면, 마지막 문자를 new_id의 길이가 3이 될 때까지 반복
}
//내가 사용한 것보다, 확실히 간결하다. 복습 할때는 이렇게 사용해봐야 겠다.
/*
[ 정규표현식 정리하기 ]
^ : 문장의 시작
$ : 문장의 끝
\w : word 문자
.{2,} : .이 최소 2개 이상
| : 또
*/


//출처:https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%8B%A0%EA%B7%9C-%EC%95%84%EC%9D%B4%EB%94%94-%EC%B6%94%EC%B2%9C-JavaScript