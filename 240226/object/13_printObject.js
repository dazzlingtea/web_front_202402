// 13_printObject
// 객체를 입력받아 키, 값 쌍을 표현하는 문자열을 리턴해야 합니다.
// 각 문자열은 한 줄에 키: 값 형태로 구성되며,
// 각 문자열 끝에는 줄바꿈 문자가 포함되어야 합니다.
// 콜론 다음에 공백을 포함해야 합니다.


function printObject(obj) {
    let result = '';
    for (const [key, value] of Object.entries(obj)) {
        result += `${key}: ${value}\n`;
    }
    return result;
}


const obj = { name: 'Steve', age: 13, gender: 'Male' };
let output = printObject(obj);
console.log(output); // -->
/*
name: Steve
age: 13
gender: Male
*/