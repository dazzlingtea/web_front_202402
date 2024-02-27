// spread 문법 
function sum(x, y, z) {
    return x + y + z;
}
  
const numbers = [1, 2, 3, 4]; // 배열 개수가 몇 개든 x + y + z라 요소 3개만 연산
  
sum(...numbers) // 질문: 어떤 값을 리턴하나요?
  // sum(numbers) x에 [1,2,3] -> 배열 + undefined + undefined
  // sum(numbers[0], numbers[1], numbers[2])


console.log(sum(...numbers));


function sum(...theArgs) {
    let result = 0;
      for(let idx = 0; idx < theArgs.length; idx++) {
          result += theArgs[idx];
      }
      return result;
}
sum(1,2,3) // 질문: 어떤 값을 리턴하나요?
sum(1,2,3,4) // 질문: 어떤 값을 리턴하나요?

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];

// 질문: lyrics의 값은 무엇인가요
console.log(lyrics.length);
console.log(lyrics);

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];  
// 참고: spread 문법은 기존 배열을 변경하지 않으므로(immutable), 
// arr1의 값을 바꾸려면 새롭게 할당해야 합니다.

// 질문: arr1의 값은 무엇인가요?
console.log(arr1);


let arr = [1, 2, 3];
let arr3 = [...arr]; // arr.slice() 와 유사
arr2.push(4);  // 참고: spread 문법은 기존 배열을 변경하지 않으므로(immutable), arr2를 수정한다고, arr이 바뀌지 않습니다.

// 질문: arr와 arr2의 값은 각각 무엇인가요?
console.log(arr);
console.log(arr3);

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };

// 질문: clonedObj와 mergedObj의 값은 각각 무엇인가요?
console.log(clonedObj);
console.log(mergedObj);

function myFun(a, b, ...manyMoreArgs) { // rest 문법
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
  
myFun("one", "two", "three", "four", "five", "six");

// 질문: 콘솔은 순서대로 어떻게 찍힐까요?
console.log(myFun("one", "two", "three", "four", "five", "six"));