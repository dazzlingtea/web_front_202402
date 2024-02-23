
// miniCalculator
let num1, num2, operator;

num1 = 2;
num2 = 3;
operator = '-';

function miniCalculator(num1, num2, operator) {
    if (operator === '+') {
        console.log(num1 + num2);
    } else if (operator === '-') {
        console.log(num1 - num2);
    } else if (operator === '*') {
        console.log(num1 * num2);
    } else if (operator === '/') {  //else로 작성했었는데 지정하는게 좋지 않을까?
        console.log(num1 / num2);
    }
}
