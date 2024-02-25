// 문자열에서 가장 큰 숫자를 찾아 반환하는 함수
function getMaxNumberFromString(str) {
  let maxNum = 0; // 최댓값을 저장할 변수 초기화

  // 문자열을 처음부터 끝까지 반복하면서
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) > maxNum) { // 현재 문자를 숫자로 변환하여 최댓값과 비교
      maxNum = parseInt(str[i]); // 현재 문자가 최댓값보다 크면 최댓값을 업데이트
    }
  }

  return String(maxNum); // 최댓값을 문자열로 변환하여 반환
}
