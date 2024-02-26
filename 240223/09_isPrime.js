// isPrime
// 1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

function isPrime(num) {
    let divisor = 2;
    let result = false;
    if(num > 1) {
        while(divisor < num) {
            if(num % divisor === 0) {
                break;
            } else {
                result = true;
            }
            divisor++;
        }
    }
    return result;
}

console.log(isPrime(12))

// true false 불리언 타입은 바로 return 가능
// if(num === 1) return false
// for(let i = 2; i < num; i++)