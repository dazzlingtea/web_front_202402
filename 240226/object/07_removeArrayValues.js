// 07_removeArrayValues
// 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거
// 별도의 리턴문(return statement)을 작성하지 않습니다.

function removeArrayValues(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            delete obj[key];
        }
    }
}
// for in 
// for(let key in obj) {
//     if(Array.isArray(obj[key])) {
//         delete obj[key];
//     }
// }


const obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there'],
};

removeArrayValues(obj);
console.log(obj); // --> { b: 2 }