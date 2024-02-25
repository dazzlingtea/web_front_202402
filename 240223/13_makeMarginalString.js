// makeMarginalString
// 문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 
// 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.
//- 이중 반복문(`double for loop`)을 사용해야 합니다.
//- `str.slice`, `str.substr`, `str.substring` 사용은 금지됩니다.
//- 빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

function makeMarginalString(str) {
  let result = '';
  for(let count = 1; count <= str.length; count++) {
    for(let i = 0; i < count; i++) {
      result += str[i];
    }
  }
  return result;
}

console.log(makeMarginalString('flower'));