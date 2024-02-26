// 06_removeNumberValues
// 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거해야 합니다
// 자바스크립트에서 object를 순회하는 방법을 검색해 봅니다.
// (js how to iterate object) for...in 외에 object 순회를 할 수 있는 방법이 있을까요?

function removeNumberValues(obj) {
    // Object.entries(obj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key];
            if (typeof value === 'number') delete obj[key];
        }
    }
    
}



const obj = {
    a: 2,
    b: 'remaining',
    c: 4,
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }