
// 매개변수와 전달인자

let name = "이정민";

function greeting(name) {
    console.log('Hello ' + name); 
}

greeting('이정민1');

// 실습) 구구단 n단을 출력하는 함수를 정의하고 호출하세요.
// 전달인자를 바꾸면 구구단 n단이 출력되어야 합니다.
// console.log()를 9번 입력해도 되지만, 더 간결한 코드를 고민해 보세요.

function multiplication(n) {
    if (n >= 2 && n <= 9) {
      for(let i = 1; i <= 9; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
      }
    } else {
        console.log('2부터 9까지의 숫자만 입력이 가능합니다.');
    }
}

multiplication(10); //  함수 실행, 전달인자 2

// multiplication(2, 5); ->  2 * 1 = 2  ~ 2 * 5 = 10까지 출력

function multiplication(n, count) {
    if(count >= 1) {
        for(let i = 1; i <= count; i++) {
            console.log(`${n} * ${i} = ${n * i}`); 
        }
    }
}

multiplication(2, 5);
// multiplication(2); 아무것도 출력X 숫자와 undefined는 비교할 수 없어서 종료됨

// 두 수를 입력받아 두 수의 곱을 리턴하는 함수
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3));
console.log(multiply(10, 3));
console.log(multiply(15, -8));