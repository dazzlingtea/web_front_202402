// 03_getLastElement
// 배열를 입력받아 배열의 마지막 요소를 리턴해야 합니다
// 빈 배열을 입력받은 경우, undefined를 리턴해야 합니다.

function getLastElement(arr) {
    if(arr === null) return undefined;
    return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3, 4]));