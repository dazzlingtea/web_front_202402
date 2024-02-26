// 20_removeFromBackOfNew
// 배열을 입력받아 배열의 마지막 요소가 제외된 새로운 배열을 리턴
// 새로운 배열(주소값 다름)을 리턴해야 합니다.
// 입력받은 배열을 수정하지 않아야 합니다(immutability).
// mdn array slice를 검색해보세요.

function removeFromBackOfNew(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]