// 02_addProperty
// 객체와 키를 입력받아 키에 해당하는 값을 true로 설정
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 함수에 명시적인 리턴문이 없을 경우, 함수의 리턴값은 어떻게 되는지 확인

function addProperty(obj, property) {
    obj[property] = true;
}


let steve = {};
addProperty(steve, 'isMale');
console.log(steve.isMale); // --> true

addProperty(steve, 'isProgrammer');
console.log(steve.isProgrammer); // --> true

let jessica = {};
addProperty(jessica, 'isSmart');
console.log(jessica.isSmart); // --> true