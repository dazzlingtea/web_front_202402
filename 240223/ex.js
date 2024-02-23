// 곱하기 연산을 할 경우 초기값 0인지 주의! 
let result = 1;
for (let num = 1; num <= 10; num++) {
    result *= num;
}
console.log(`10까지 곱하기 : ${result}`);

// for문 실습
for(let i = 0; i < 11; i++) {
    console.log(i);
}

// 구구단 중 n단 출력
let num = 3;
if(num >= 2 && num <= 9) {
    for(let i = 1; i < 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
} else {
    console.log('2와 9 사이의 수를 입력하세요.')
}

// 문자열 for문
let str = 'codesandbox';
let newStr = '';
for (let i = 0; i < str.length; i++) {
    newStr += str[i];
}
console.log(newStr);
