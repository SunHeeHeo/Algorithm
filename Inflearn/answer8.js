//일곱 난쟁이 
//일곱난쟁이를 찾는 프로그램 작성 7명의 합이 100
//주어지는 키는 100을 넘지않는 자연수, 가증한 정답이 여러가지인 경우에는 아무거나 출력

let a ="20 7 23 19 10 15 25 8 13"; 
let b = a.trim().split(" ");
let arr=[]
let sum=0;

function solution(a){
    for (let i =0;i<b.length;i++){
        sum+=Number(b[i])
    } //입력된 배열의 합을 구함
    let rest = sum-100;//40 //합에 -100을 빼서 오버된 값을 도출 
    let j=0;
    while(true) {
        restNum=String(rest-Number(b[j])) //도출된 값과 첫번째 요소부터 빼줌
        if(!b.includes(restNum)){ //restNum의 값이 있는지 없는지 판단 
            j++ 
            continue //없다면 계속 while 문 유지
        } else if (restNum!==b[j]) { //rest 와 restNum이 같을 경우 예외 처리 
            num1=b.splice(j,1) 
            num2=b.splice(b.indexOf(restNum),1) //두 요소의 합이, rest변수와 동일시, b라는 배열에서 도출 
            break
        }
        j++ //아닐경우 인덱스 변화 
    }return b
}
solution(a)
let sum1=0 //while 문에서 결과값이 나온 배열의 합이 100이 맞는지 확인 해봄
for (let i =0;i<b.length;i++){
    sum1+=Number(b[i])
}
console.log(sum1)


/*내가 생각했던 방법이 효율적인 방법인지 모르겠으나
일단, 답은 나옴! :)
*/
