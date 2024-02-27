// 14_getElementsAfter
// 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴해야 합니다.
// - 반복문(`for`, `while`) 사용은 금지됩니다.
// - 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
// - 배열의 길이 이상의 인덱스를 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getElementsAfter(arr, n) {
    // 반복문을 쓸 수 있다면
    // let newArr = [];
    // for(let i = n + 1; i < arr.length; i++) {
    //     newArr.push(arr[i]);
    // }
    // return newArr;
    let result = arr.slice(n+1, arr.length);
    return result;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']