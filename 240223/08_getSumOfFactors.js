// getSumOfFactors
// 수를 입력받아 약수(factor)의 합을 리턴해야 합니다.

// let output = getSumOfFactors(8);
// console.log(output); // --> 15 (1 + 2 + 4 + 8)

// output = getSumOfFactors(12);
// console.log(output); // --> 28 (1 + 2 + 3 + 4 + 6 + 12)

function getSumOfFactors(num) {
    let factor = 1;
    let sum = 0;
    while(factor <= num) {
        if(num % factor === 0) {
            sum += factor;
        }
        factor++;
    }
    return sum;
}

console.log(getSumOfFactors(12));

// sum = 1 + num 미리 1과 자기자신을 더해두고
// for(let i = 2; i < num; i++)

// 또는 제곱근 활용 (num / 제곱근 이하의 약수)