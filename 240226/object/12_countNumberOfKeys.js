// 12_countNumberOfKeys
// 객체를 입력받아 속성의 개수를 리턴
// number타입을 리턴

function countNumberOfKeys(obj) {
    let count = 0;
    for (let key in obj) {
        // if (obj.hasOwnProperty(key)) { 이미 있는 속성만 반복하기 때문에 필요X
            count++;
        // }
    }
    return count;
}

// Object.keys(obj) key들을 가진 배열이 생성됨
// return Object.keys(obj).length 순회하지 않아도 구할 수 있음


const obj = {
    a: 1,
    b: 2,
    c: 3,
};

let output = countNumberOfKeys(obj);
console.log(output); // --> 3