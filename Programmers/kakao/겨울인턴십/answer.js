/*시작 시간 9시 54분
*끝낸 시간 10시 55분 
*소요 시간 1시간 
<my idea>
- 스택문제 (LIFO)
- 해당 마지막 숫자를 pop하고 push 해서 배열을 만듦
- for 구문을 돌려서 pop한 숫자들을 모은 배열들을 for 구문을 돌리면서 뒷 숫자와 동일하면, 숫자를 2씩 올려줌
- 주어진 배열이 0일때 주의; 빈칸을 의미- continue 개념을 써볼까?
<결과>
런타임 에러..ㅠㅠ
*/

let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
let moves = [1,5,3,5,1,2,1,4]

function solution(board, moves) {
    let newMoves=[] //[0,4,2,4,0,1,0,3]
    let stack =[]
    //새롭게 인덱스 지정 
    for (let i =0; i<moves.length; i++){
    let move = moves[i] -1;
    newMoves.push(move)
}  
   //뽑은 인형 배열로 만들어 줌
    for (let i =0; i<newMoves.length; i++){
        let arr = board[newMoves[i]]
        if(arr[arr.length-1]!==0) { //if(!arr[arr.length-1]) 는 안 먹혔지? 왜 때문에?
            let doll=board[newMoves[i]].pop()
            stack.push(doll)
     }
    }
    //뽑은 인형이 앞뒤 서로 같으면 삭제 해주고 그 자리에 뒷 요소와 관련 없는 값을 지정
    let answer =0;
    for (let i =0; i<stack.length; i++){
        if(stack[i]===stack[i+1]){
            stack.splice(i,2)
            answer +=2
            stack.splice(i,0,(stack[i])+1,(stack[i])+2)
     }
    }
    return answer;
}
solution(board, moves) 
//왜 리턴할 경우 값은 출력되지 않고, console.log를 해줘야 출력해줄까? return은 값을  반환해주되, 그려주지 않는다는 의미?

/*
<결과>
런타임 에러..ㅠㅠ
어제 나왔던 시간 복잡도 그 개념인가..
*/