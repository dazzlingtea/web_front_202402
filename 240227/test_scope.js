// 1

let username = 'kimcoding';
// if(username) {
//     let message = `Hello, ${username}!`;
//     console.log(message);
// }
// console.log(message);

let message;
if(username) {
    message = `Hello, ${username}!`;
    console.log(message);
}
console.log(message);



// 2
let greeting = 'Hello';
function greetSomeone() {
    let firstName = 'Josh';
    return greeting + ' ' + firstName;
}

console.log(greetSomeone());
// console.log(firstName);


// 스코프 예제 3 우선순위
let name = 'kimcoding';

function showName() {
    // 지역변수로 전역과 동일한 이름을 사용할 수 있음 (다른 변수)
    let name = '박해커'; // 이 선언이 없었다면 kimcoding 출력
    console.log('1 : ' + name);
}
console.log('2 : ' + name);
showName();
console.log('3 : '+ name);


// 블록
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log('final i: ', i); reference error

// var 지역 전역 상관없이 사용 
// (증감문에서 5 찍고 조건 만족 못해서 전역 콘솔로그로)
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log('final i: ', i); // 5
