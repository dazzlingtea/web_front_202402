let myNumber = [73, 98, 86, 61, 96];
myNumber;


for(let i = 0; i < myNumber.length; i++) {
    console.log(myNumber[i]);
}

let myNum = [10, 20, 40, 10];
let sum = 0;
for(let i = 0; i < myNum.length; i++) {
    sum += myNum[i];
}
console.log(`누적합 : ${sum}`);



function processArray(input) {
    if (Array.isArray(input)) {
      console.log('Array Found:', input);
      // 배열을 처리하는 로직
    } else {
      console.log('Input is not an array:', input);
    }
  }
  
  processArray([5, 10, 15]);
  processArray('Not an array');
  processArray(undefined);


const nestedArray = [1, [2, 3], [4, 5]];
nestedArray.push(6);
console.log(nestedArray);


function nestedToArray(input) {
 let newArray = [];
 
  for(let idx = 0; idx < input.length; idx++) {
    if(Array.isArray(input[idx])) {
        for(let i = 0; i < input[idx].length; i++) {
            newArray.push(input[idx][i]);
        }
    } else {
        newArray.push(input[idx]);
    }
  } 

  return newArray;
}
console.log(nestedToArray(nestedArray));

let f = ['apple', 'banana', 'orange'];
f.unshift('kiwi');
console.log(f);


let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('grape')); 