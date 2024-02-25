// 주어진 숫자까지의 모든 소수를 나열하는 함수
function listPrimes(num) {
  let result = '2'; // 결과를 저장할 변수를 2로 초기화

  // 3부터 num까지 홀수만 검사하여 소수인지 확인
  for (let candi = 3; candi <= num; candi += 2) {
    let isPrime = true; // 소수인지 여부를 저장할 변수 초기화
    let sqrt = parseInt(Math.sqrt(candi)); // 현재 숫자의 제곱근을 구함

    // 3부터 현재 숫자의 제곱근까지 홀수만 검사하여 나누어 떨어지는지 확인
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (candi % divider === 0) { // 현재 숫자가 divider로 나누어 떨어지는 경우
        isPrime = false; // 소수가 아님을 표시하고
        break; // 반복문 종료
      }
    }

    if (isPrime) { // 소수인 경우
      result = `${result}-${candi}`; // 결과에 현재 숫자를 추가
    }
  }

  return result; // 결과 반환
}

console.log(listPrimes(2));