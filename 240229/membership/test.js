
function checkStringHas(str) {
    // 특수문자나 숫자가 있으면 true 아니면 false
    for(let letter in str) {
        if(letter.charCodeAt() >= 33 && letter.charCodeAt() <=64) {
            return true;
        } else {
            return false;
        }
    }
}

let str = '1234';
console.log(checkStringHas(str));

let p = 12345;

console.log(checkStringHas(toString(p)));

let str2 = '1234#';
console.log('정규 '+/[!@#$%^&*]/g.test(str2));
console.log('함수 '+checkStringHas(str2));