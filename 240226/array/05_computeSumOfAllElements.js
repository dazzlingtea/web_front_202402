// 05_computeSumOfAllElements
// 배열을 입력받아 배열의 모든 요소의 합을 리턴해야 합니다.
// 입력받은 배열이 빈 배열인 경우, 0을 리턴해야 합니다.

function computeSumOfAllElements(arr) {
    let sum = 0;
    if(arr === null) return sum;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let output = computeSumOfAllElements([1, 2, 3]);
console.log(output);