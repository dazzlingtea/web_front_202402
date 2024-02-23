// 실습1) if문 내부의 코드가 실행되도록 변수 course에 올바른 값을 할당하세요.
let course = 'fe';
if (course === 'fe') {
  console.log('변수 course에 "fe"를 할당했습니다.');
}


// 실습2) age가 19보다 크고, job이 student가 아닐 경우 코드가 실행되도록 조건식을 작성하세요.
let age = 25;
let job = 'sw engineer';

// false대신 새로운 조건식을 작성하세요.
if (age > 19 && job !== 'student') {
  console.log('조건을 만족합니다.');
}

// 실습) 구구단을 출력하는 함수에서 변수 num이 2와 9사이의 수일 경우 구구단을 출력하고, 
// 그렇지 않은 경우 2와 9사이의 숫자를 입력해 달라는 메시지를 콘솔에 출력하도록 코드를 완성하세요.
// hint: if ~ else문을 사용하세요.

let num = 0;

if(num <= 9 && num >= 2) {
    console.log(num * 1);
    console.log(num * 2);
    console.log(num * 3);
    console.log(num * 4);
    console.log(num * 5);
    console.log(num * 6);
    console.log(num * 7);
    console.log(num * 8);
    console.log(num * 9);
} else {
    console.log('2와 9사이의 수를 입력하세요.');
}



// isOldEnoughToDrink
function isOldEnoughToDrink(age) {
    if(age >= 18) {
        return true;
    } else { 
        return false;
    }
  }


