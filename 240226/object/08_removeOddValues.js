// 08_removeOddValues
// 객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// 홀수 판단은 number 타입에만 적용

function removeOddValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key];
            if (typeof value === 'number') {
                if(value % 2 === 1) delete obj[key];
            }
        }
    }
}


const obj = {
    a: 2,
    b: 3,
    c: 4,
};

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }