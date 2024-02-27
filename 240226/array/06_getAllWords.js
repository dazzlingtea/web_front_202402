// 06_getAllWords
// - 반복문(`for`, `while`) 사용은 금지됩니다.
// - 단어는 공백 한 칸으로 구분합니다.
// - 연속된 공백은 없다고 가정합니다.

function getAllWords(str) {
    let strArr = str.split(" ");
    return strArr;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']