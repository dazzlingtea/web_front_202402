// 11_removeNumbersLargerThan
// 수와 객체를 입력받아 입력받은 수보다 큰 수를 갖는 속성을 모두 제거해야 합니다.
// 대소 비교는 number 타입에만 적용
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// for in mdn을 검색해보시기 바랍니다.

function removeNumbersLargerThan(num, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            value = obj[key];
            if (typeof value === 'number' && value > num) {
                delete obj[key];
            }
        }
    }
}



const obj = {
    a: 8,
    b: 2,
    c: 'montana',
};

removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }