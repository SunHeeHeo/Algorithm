const input =['5 21','5 6 7 8 9'];
const NM = input.shift().split(" ").map(num => parseInt(num)) //5,21을 정수로 변환
console.log(NM.length)
const N = NM.shift(); //5
const M = NM.shift(); //21
const carArr = input.shift().split(" ").map(num =>parseInt(num)) //5 6 7 8 9를 정수로 변환 
let max = 0;

for (let i =0; i<N-2; i++){ //3개씩 더해야 하니까 총 배열 길이에서 -2 해줌 (첫번째 수)
    for(let j=i+1; j<N-1;j++) { //총 배열 길이에서 -1 (두번째 수니까)
        for (let k=j+1; k<N; k++){ //세번째 수 
            let sum = carArr[i] + carArr[j] + carArr[k];
            if(sum>max && sum <=M){ //총 합이 M 보다 같거나 작으면, 그리고 총합이 앞 전의 max 보다 크면 max 값 치환 
                max=sum;
            }
        }
    }

}

console.log(max) //max 값을 구하면 됨 