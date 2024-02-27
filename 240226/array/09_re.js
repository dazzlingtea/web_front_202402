// # **09_getLongestWord**
// 문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.
// string 타입의 공백이 있는 알파벳 문자열
// - 단어는 공백 한 칸으로 구분합니다.
// - 가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴해야 합니다.

function getLongestWord(str) {
    let words = str.split(" ");
    let maxWord = words[0];
    
    for(let i = 1; i < words.length; i++) {
        if(maxWord.length < words[i].length)
            // if(strlen === strArr[i].length) {
            //     return result;
            // } else {
            
            maxWord = words[i];
            // }
    }
    return maxWord;
}


let output = getLongestWord('I love javascript');
console.log(output); // --> "javascript"

output = getLongestWord('Teamwork skills will take you anywhere');
console.log(output); // --> "Teamwork"