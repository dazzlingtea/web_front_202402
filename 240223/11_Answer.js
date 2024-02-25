// 문자열의 모든 글자 쌍을 나열하는 함수
function makePermutations(str) {
  let result = ''; // 결과를 저장할 변수 초기화

  // 문자열의 모든 글자에 대해
  for (let left = 0; left < str.length; left++) {
    for (let right = 0; right < str.length; right++) {
      result = result + `${str[left]}${str[right]},`; // 현재 글자 쌍을 결과에 추가
    }
  }

  return result.slice(0, result.length - 1); // 마지막 쉼표를 제외하고 결과 반환
}
