// 17_getValueOfNthElement
// 배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴
// - 빈 배열을 입력받은 경우, `'no name'`을 리턴해야 합니다.
// - 배열의 범위를 벗어나는 인덱스를 입력받은 경우
//   , 마지막 객체의 `'name'` 속성값을 리턴해야 합니다.

function getValueOfNthElement(arr, num) {
  if(arr.length === 0) return 'no name';
  else if(num >= arr.length) return arr[arr.length-1]['name'];
  else return arr[num]['name'];
}

let output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 1);
console.log(output); // --> 'Anna'

output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 2);
console.log(output); // --> 'Anna'

output = getValueOfNthElement(
  [{ name: 'Jim' }, { name: 'Tim' }, { name: 'Pooh' }],
  1
);
console.log(output); // --> 'Tim'

output = getValueOfNthElement([], 0);
console.log(output); // --> 'no name'