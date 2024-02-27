// 14_getElementOfArrayProperty
// 객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우,
// 수가 가리키는 인덱스에 해당하는 요소를 리턴해야 합니다.
 // let arr = obj[key] -> arr = [1,2,3,4,5]  이런 배열이 될 겁니다.
 //                       arr[index]에 해당하는 값을 리턴하는 문제

// - 주어진 키에 해당하는 값이 배열이고,
// 주어진 수가 배열의 범위를 벗어나지 않는 경우에만 배열의 요소를 리턴해야 합니다.
// - 그 외의 경우, `undefined`를 리턴해야 합니다.

function getElementOfArrayProperty(obj, key, index) {
    let arrProperty = obj[key];
    // for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(arrProperty)) {
            // if(index < arrProperty.length) { 배열 범위를 넘으면 자동으로 undefined
                return arrProperty[index];
            // }
        } else return 'undefined';
    // }
}
  


let obj = {
    key: ['Jamil', 'Albrey'],
};

let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'