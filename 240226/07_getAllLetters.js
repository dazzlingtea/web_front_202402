// 07_getAllLetters
// 문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴해야 합니다.
// - `str.split` 사용은 금지됩니다.
// - 빈 문자열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getAllLetters(str) {
    let strArr = [];
    for(let i = 0; i < str.length; i++) {
        strArr.push(str[i]);
    }
    return strArr;
}



let output = getAllLetters('Radagast');
console.log(output); 