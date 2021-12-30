/*소요시간 22분*/
let n = 125;


function solution(n) {
    let result1 =""
    while (3<n){
        let rest= n%3
        result1 +=rest
        n=parseInt(n/3)
    }
    n = parseInt(n)
    result1 +=n
    sum =0;
    for (let i=0; i<result1.length; i++){
        sum+= result1[i]*(3**(result1.length-(i+1)))
    }
    return sum
}

console.log(solution(n))

//정답률 80퍼센트 ㅠㅠ
//다른 사람이 푼 답안

function solution(n) {
    let reversed_N = n.toString(3).split('').reverse().join('')
    return parseInt(reversed_N, 3) //3진수인 reversed_N을 10진수로 변환
}
//허허허....ㅋㅋ 단 3줄로 끝나다니
/*10진수를 다른 진수로 변환하기 위해서 toString()을 쓸수 있다(toString()은 특정 객체를 문자열로 반환해준다가 정석이지만, 10진수를 특정 진수로 변환하고 싶을때 사용한다)  
reverse() 메서드는 호툴한 배열을 반전하고, 원본 배열을 변형하여 그 참조를 반환 한다.  
split("").reverse().join("") 이렇게 쓴 이유는 문자열이라서 그런것 같다!  
다른 진수를 10진수로 변환하기 위해서 parseInt()를 쓴다.  
*/