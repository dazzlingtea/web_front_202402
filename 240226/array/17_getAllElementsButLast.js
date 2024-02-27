// 17_getAllElementsButLast
// 배열을 입력받아 마지막 요소를 제외한 배열을 리턴해야 합니다.
// - 반복문(`for`, `while`) 사용은 금지됩니다.
// - 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function getAllElementsButLast(arr) {
    if(arr === null) return arr;
    arr.pop();
    return arr;
    // arr.slice(0, arr.length - 1);
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2, 3]