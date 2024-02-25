// 주어진 숫자까지의 3의 배수를 모두 연결하여 문자열을 생성하는 함수
function makeMultiplesOfDigit(num) {
  let result = ''; // 결과를 저장할 변수 초기화

  // 3부터 num까지 3씩 증가하면서 반복
  for (let i = 3; i <= num; i += 3) {
    result = result + String(i); // 현재 숫자를 문자열로 변환하여 결과에 추가
  }

  return result; // 결과 반환
}
