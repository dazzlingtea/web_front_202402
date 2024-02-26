// 23_getAllElementsButNth
// 배열과 인덱스를 입력받아 해당 인덱스의 요소를 제외한 배열을 리턴해야 합니다.
// 배열의 길이보다 큰 인덱스를 입력받은 경우, 배열 그대로를 리턴해야 합니다.

function getAllElementsButNth(arr, n) {
    let newArr = [];
    if(n >= arr.length) return arr;
    for(let i = 0; i < arr.length; i++) {
        if(i !== n) 
        newArr.push(arr[i]);
    }
    return newArr;   
}
  

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']