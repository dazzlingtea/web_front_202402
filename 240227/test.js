// 실습1) 코드를 실행하여 결과를 확인하세요.
// 터미널에 node index.js를 입력하면 코드의 실행결과를 확인할 수 있습니다.

// 원시 자료형이 참조된 변수를 다른 변수에 할당하기
let num = 20;
let copiedNum = num;

// 참조 자료형이 할당된 변수를 다른 변수에 할당하기
let arr = [0, 1, 2, 3];
let copiedArr = arr;  // 기존 변수를 할당할 때만 복사되고 [1,2,3,4] 는 새로운 배열을 할당

// 두 변수가 같은지 확인하기 - 1
console.log(num === copiedNum); // ?
console.log(arr === copiedArr); // ?

// 원본을 변경하기
num = 30;
arr.push(4);

// 두 변수가 같은지 확인하기 - 2
// console.log(num === copiedNum); // ?
// console.log(arr === copiedArr); // ?

// console.log(`num: ${num} copiedNum: ${copiedNum}`);
// console.log(`arr: ${arr} copiedArr: ${copiedArr}`);

// 이 두 변수의 현재 상태는?
console.log(copiedNum); // ?
console.log(copiedArr); // ?

console.log(`num: ${num} copiedNum: ${copiedNum}`);
console.log(`arr: ${arr} copiedArr: ${copiedArr}`);


let arr3 = [
    [1, 2],
    [3, 4],
    [5, 6]
]

let arr2 = [];

for(let i = 0; i < arr3.length; i++) {
    arr2.push(arr3[i].slice());
}
console.log(arr3);
console.log(arr2);

// 종합퀴즈 2
// console.log('code' === 'code');
// console.log('배열비교: '+ [1,2,3] === [1,2,3]); // 할당만 하지 않았을 뿐 각각 선언되어 다른 주소값
// console.log({foo: 'bar'} === {foo: 'bar'});