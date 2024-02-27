// getType
// string 타입을 리턴
// 자바스크립트에서 array, null 타입은 존재하지 않지만, 이 둘을 구분하여 출력합니다.

function getType(anything) {
    let type = '';
    
    if(anything === null) return 'null';
    else if(Array.isArray(anything)) return 'array';
    else return type + typeof anything;

}

console.log(getType('hello'));
console.log(getType(null));
console.log(getType(true));
console.log(getType({ name: 'Steve' }));
console.log(getType([100, 200, 300]));
