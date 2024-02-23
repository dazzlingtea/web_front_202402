// 함수 선언문으로 정의한 함수
function greeting() {
    console.log('Hello World');
};

console.log('함수 실행 전입니다.');

greeting();

console.log('함수 실행 이후입니다.');

// 함수의 이름 + 소괄호
console.log();

Math.max(2, 0);

// 실습1) 문자열 ‘함수선언문’을 출력하는 declared라는 이름의 함수를 
// 함수선언문으로 정의해 보세요.

function declared() {
    console.log('함수선언문');
}

declared();

// 함수표현식 
// 함수를 변수 declared에 할당
// 변수에 속하기 때문에 함수명을 짓지 않아도 됨
let declared2 = function () {
    console.log('함수표현식');
}
declared2();

// 문자열 '함수표현식'을 출력하는 expression이라는 이름의 함수를 함수선언문으로 정의해 보세요.
let expression = function () {
    console.log('함수표현식');
};

expression();
