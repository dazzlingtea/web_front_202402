// makePermutations
// 문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 
// 길이 2의 문자열들을 리턴해야 합니다.
// 입력받은 문자열의 각 문자를 0, 1, 2, ..., n이라고 할 경우, 00,01,02,...,nn 형식으로 리턴
// 이중 반복문(double for loop)을 사용

function makePermutations(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < str.length; j++) {
      result += str[i] + str[j];
      if(i !== str.length - 1 || j !== str.length - 1) {
        result += ',';
      }
    }
  }
  return result;
}

console.log(makePermutations('ab'));