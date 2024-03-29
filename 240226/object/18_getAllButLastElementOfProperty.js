// 18_getAllButLastElementOfProperty
// 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우
// , 마지막 요소가 제거된 새로운 배열을 리턴해야 합니다.
// - 주어진 키에 해당하는 값이 배열이고, 빈 배열이 아닌 경우에만 마지막 요소가 제거된 배열을 리턴해야 합니다.
// - 그 외의 경우, 빈 배열을 리턴해야 합니다.
// - 입력받은 객체를 수정하지 않아야 합니다.

function getAllButLastElementOfProperty(obj, key) {
  if(Array.isArray(obj[key])) {
    if(obj[key].length > 0) {
      let result = [];
      while(obj[key].length > 1) {
        result.push(obj[key].shift());
      }
      return result;
    } else return [];
  } else return [];
}

const obj = {
  key: [1, 2, 3],
};


let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]

// let obj2 = {key: []};
// output = getAllButLastElementOfProperty(obj2, 'key');
// console.log(output);