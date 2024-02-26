// // 20_countAllCharacters
// 문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.
// 각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.
// string 타입의 공백이 없는 문자열이 인자
// 빈 문자열을 입력받은 경우, 빈 객체를 리턴

function countAllCharacters(str) {
  let result = {};

  if(str.length === 0) return result;
  for(let i = 0; i < str.length; i++) {
    if(!result.hasOwnProperty(str[i]))
      result[str[i]] = 1;
    else 
      result[str[i]] += 1;
  }
  return result; 
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

output = countAllCharacters('');
console.log(output);