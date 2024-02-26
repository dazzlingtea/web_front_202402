// 13_mergeArrays
// - 두 배열이 합쳐진 새로운 배열을 리턴해야 합니다.
// - `[arr1[0], ..., arr1[n - 1], arr2[0], ..., arr2[m - 1]]`
// - `arr1.length`는 n
// - `arr2.length`는 m
// 반복문(for, while) 사용은 금지됩니다.

function mergeArrays(arr1, arr2) {
    let newArr = [];
    return newArr.concat(arr1, arr2);

}

let output = mergeArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

// ... spread operator (전개연산자)
// push