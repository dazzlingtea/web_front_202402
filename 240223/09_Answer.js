// 주어진 숫자가 소수인지 확인하는 함수
function isPrime(num) {
  let sqrt = parseInt(Math.sqrt(num)); // 주어진 숫자의 제곱근을 구함

  if (num === 1) { // 주어진 숫자가 1인 경우
    return false; // 소수가 아니므로 false 반환
  }

  if (num === 2) { // 주어진 숫자가 2인 경우
    return true; // 소수이므로 true 반환
  }

  if (num % 2 === 0) { // 주어진 숫자가 짝수인 경우
    return false; // 소수가 아니므로 false 반환
  }

  for (let i = 3; i <= sqrt; i += 2) { // 홀수인 경우 소수 판별을 위해 3부터 시작하여 sqrt까지 반복
    if (num % i === 0) { // 주어진 숫자가 i로 나누어 떨어지는 경우
      return false; // 소수가 아니므로 false 반환
    }
  }

  return true; // 위의 모든 경우에 해당하지 않으면 소수이므로 true 반환
}
