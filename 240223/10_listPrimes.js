// listPrimes
// 2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴
// - `string` 타입을 리턴해야 합니다.
// - `2-3-5-7`의 형식으로 리턴해야 합니다.
// 이중 반복문(double for loop)을 사용해야 합니다.

function listPrimes(num) {
  let primeNums = '2'; // 소수 중 2만 짝수이므로 초기값
  let count = 0;
  if(num === 2) { // num이 2라면 반복문 필요없음
    return primeNums; 
  } else {  // num이 2가 아니라면 3부터 반복문 시작
    for(let i = 3; i <= num; i+=2) { // num까지의 자연수 i 중 홀수만 대상으로 하는 반복문
      for(let j = 2; j < i; j++) { // i가 소수인지 확인하기 위한 반복문 (1과 i는 제외)
        if(i % j === 0) {count++;} // 1과 i 자신을 제외한 배수라면 count++
      }
      if(count === 0) { // 소수라면 count는 0
        primeNums += '-' + i;
      }
    }
    return primeNums;
  }   
}

console.log(listPrimes(7));