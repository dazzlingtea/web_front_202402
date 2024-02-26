// 12_countNumberOfKeys
// 객체를 입력받아 속성의 개수를 리턴
// number타입을 리턴

function countNumberOfKeys(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}


const obj = {
    a: 1,
    b: 2,
    c: 3,
};

let output = countNumberOfKeys(obj);
console.log(output); // --> 3