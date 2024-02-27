// 10_getEvenNumbers
// 수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴해야 합니다.
// 짝수가 없는 경우, 빈 배열을 리턴해야 합니다.

function getEvenNumbers(arr) {
    let evenArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
          evenArr.push(arr[i]);
        }
        else {}
    }
    return evenArr;
}
  

let output = getEvenNumbers([1, 2, 3, 4]);
console.log(output); // --> [2, 4]
