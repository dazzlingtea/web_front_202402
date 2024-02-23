// sumTo
// 수를 입력받아 0부터 해당 수까지의 합을 리턴해야 합니다.

function sumTo(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) { // 0을 더할 필요는 없음
        sum += i;
    }
    return sum;
}

console.log(sumTo(5));
console.log(sumTo(0));