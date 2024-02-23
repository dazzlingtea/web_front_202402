// fizzBuzz
// - 3으로 나누어 떨어지는 경우, 'Fizz'를 리턴해야 합니다.
// - 5으로 나누어 떨어지는 경우, 'Buzz'를 리턴해야 합니다.
// - 3과 5로 모두 나누어 떨어지는 경우, 'FizzBuzz'를 리턴해야 합니다. !!!!!
// - 3이나 5로 나누어 떨어지지 않는 경우, 'No FizzBuzz'를 리턴해야 합니다.

let num = 15;

function fizzBuzz(num) {
    // if(num % 3 === 0 && num % 5 === 0) {
    if (num % 15 === 0) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log('No FizzBuzz');
    }
  }
