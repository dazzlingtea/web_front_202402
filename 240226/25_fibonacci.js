// 25_fibonacci
// 수(`num`)를 입력받아 길이가 `num + 1`인 피보나치 수열을 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다.
// 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// - 반복문(`for`)문을 사용해야 합니다.
// - 피보나치 수열은 0번부터 시작합니다.

function fibonacci(num) {
    let fiboArr = [0, 1];
    // let fibo = 0;
    for(let i = 2; i <= num; i++) {
        fiboArr[i] = fiboArr[i-1] + fiboArr[i-2];
        // fiboArr.push(i+1);
    }
    if(num === 0) return [0];
    return fiboArr;
}

let output = fibonacci(5);
console.log(output[5]); // --> 5

output = fibonacci(9)[9];
console.log(output); // --> 34

console.log(fibonacci(5));
console.log(fibonacci(9));