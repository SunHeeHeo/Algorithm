/*
소요시간 50분..ㅎㅎ
*/
let math1 = "1, 2, 3, 4, 5, 1, 2, 3, 4, 5"
let math2 = "2, 1, 2, 3, 2, 4, 2, 5, 2, 1"
let math3 = "3, 3, 1, 1, 2, 2, 4, 4, 5, 5"
let answers = [1,2,3,4,5]
let way1 = math1.trim().split(", ");
let way2 = math2.trim().split(", ");
let way3 = math3.trim().split(", ");

way1.splice(answers.length);
way2.splice(answers.length);
way3.splice(answers.length);
way1.sort();
way2.sort();
way3.sort();
console.log(way1,way2,way3)
arr=[]
function solution(way){
    let count =0
    for(let i=0; i<answers.length; i++){
        if(answers[i]!==Number(way[i])){
        }else{
            count ++
        }
    }
    arr.push(count)
    return count 
}

solution(way1)
solution(way2)
solution(way3) //arr =[5,3,2]
const max = Math.max.apply(null, arr);
const answer = (arr.indexOf(max))+1 //ㅠㅠㅠㅠㅠ
console.log(answer)

//splice 써줘서 시간이 걸린점
//좀 더 추상화 시킬수 있을꺼 같은데, 
//함수로 만들어 볼 것!