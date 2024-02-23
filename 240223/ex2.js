// 실습1) 1 ~ 10 홀수만 출력

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(i);
    } 
}

// 실습2) 인덱스 짝수인 문자만 출력

let str = 'software engineering';
let result = '';

for(let i = 0; i < str.length; i++) {
    if(i % 2 === 0) {
        result += str[i];
    }
}
console.log(`[ ${result} ]`);

// 향상된 for문? 
let str2 = '';
for(let i in str) {
    str2 += str[i];
}
console.log(`for in : ${str2}`);

str2 = '';
for(let i of str) {
    str2 += i;
}
console.log(`for of : ${str2}`);


// 실습3) 문자열 길이가 10 이상, 모두 대문자로 변경, 하나씩 출력
str = 'javascriptjavaspring';
// str = 'spring';

if (str.length >= 10) {
    for(let i = 0; i < str.length; i++) {
        console.log(str[i].toUpperCase());
    }
}
