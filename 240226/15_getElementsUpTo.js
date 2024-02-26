// 15_getElementsUpTo
// 배열과 인덱스를 입력받아 주어진 인덱스 이전의 요소들을 갖는 새로운 배열을 리턴해야 합니다.
// - 반복문(`for`, `while`) 사용은 금지됩니다.
// - 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// - 배열의 길이를 넘는 인덱스를 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getElementsUpTo(arr, n) {
    // let newArr = [];
    // if(n >= arr.length) return newArr;
    // for(let i = 0; i < n; i++) {
    //     newArr.push(arr[i]);
    // }
    // return newArr;
    if(n >= arr.length) return [];
    return result = arr.slice(0, n);
}


let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
console.log(output); // --> ['a', 'b', 'c']

output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 6);
console.log(output); // --> []