// 02_getFirstElement
// 배열을 입력받아 배열의 첫번째 요소를 리턴해야 합니다.
// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.

function getFirstElement(arr) {
    // if(arr === null) return undefined; 없어도 자동으로 undefined
    return arr[0];
}

console.log(getFirstElement([1,2,3,4,5]));
console.log(getFirstElement([]));