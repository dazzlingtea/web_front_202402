// 종합퀴즈 2
console.log('code' === 'code');

// 할당만 하지 않았을 뿐 각각 선언되어 다른 주소값
// console.log([1,2,3] === [1,2,3]); // false
// console.log({foo: 'bar'} === {foo: 'bar'}); // false


// 종합퀴즈 3
let x  = {foo: 3};
let y = x;
y = 2;

console.log(x.foo);

// 종합퀴즈 4
let myArray = [2, 3, 4, 5];
let ourArray = myArray;
ourArray[2] = 25;
ourArray = undefined; // myArray와 연결고리가 끊어짐

console.log(myArray);

// 종 5
let player = {score: 3}; // 메모리 player와 객체의 힙 주소, 힙에는 주소와 {score: 3} 저장
function doStuff(obj) {  // obj도 player와 같은 주소를 바라보고 있음
    obj.score = 2;
}
doStuff(player);

console.log('Q5: '+player.score); // 2

// 종 6
let score = 80; // 원시 타입
function doStuff2(value) {
    value = 90;   // 함수 내에서만 사용
}
doStuff2(score); // doStuff(score) -> doStuff(80) 실행
              // function doStuff(value -> let value = 80;) value만 변경됨

console.log('Q6: '+score);