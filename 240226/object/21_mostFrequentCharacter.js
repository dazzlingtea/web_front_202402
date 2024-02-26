// 21_mostFrequentCharacter
// 문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴
// - 띄어쓰기는 제외합니다.
// - 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
// - 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function mostFrequentCharacter(str) {
  let result = {};
  let letter = '';
  let mostFrequency = {letter : 0};
  if(str.length === 0) return '';
  for(let i = 0; i < str.length; i++) {
    if(!result.hasOwnProperty(str[i]))
      result[str[i]] = 1;
    else 
      result[str[i]] += 1;
      if(mostFrequency.letter < result[str[i]]) {
        mostFrequency.letter = result[str[i]];
        letter = str[i];
      }
  }
  return letter; 
}

let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'

output = mostFrequentCharacter('hello world');
console.log(output); // --> 'l'

output = mostFrequentCharacter('   ');
console.log(output); // --> ''

output = mostFrequentCharacter('');
console.log(output); // --> ''

output = mostFrequentCharacter('abba');
console.log(output); // --> 'b'