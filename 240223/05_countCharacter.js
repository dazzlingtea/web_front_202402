// countCharacter
// 문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴
// - 반복문(`for`)문을 사용해야 합니다.
// - 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

function countCharacter(str, letter) {
  let result = 0;  
  if (str === '') return 0;
  else {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            result++;
        }
      }
    return result;
  }
}

console.log(countCharacter('apple pie', 'p'));