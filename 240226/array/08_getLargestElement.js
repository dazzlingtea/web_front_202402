// 08_getLargestElement
// 배열을 입력받아 가장 큰 요소를 리턴해야 합니다.
// number 타입의 정수로 구성된 배열
// number 타입을 리턴해야 합니다.

function getLargestElement(arr) {
    // 빈 배열인지 확인할 때는 .length === 0

    let maxElement = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(maxElement < arr[i]) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}



let output = getLargestElement([1, 4, 3]);
console.log(output); // --> 4

output = getLargestElement([-4, -2, -9]);
console.log(output); // --> -2