// 04_getNthElement
// 배열과 수를 입력받아 수가 인덱스로 가리키는 배열의 요소를 리턴해야 합니다.
// - 빈 배열을 입력받은 경우, `undefined`를 리턴해야 합니다.
// - 배열의 길이를 벗어나는 수를 입력받은 경우, `'out of index range'`를 리턴해야 합니다.

function getNthElement(arr, index) {
    // if(arr === null) return undefined;
    if(index >= arr.length) return 'out of index range';
    return arr[index];
}

console.log(getNthElement([1, 3, 5], 1));
console.log(getNthElement([1, 3, 5], 3));