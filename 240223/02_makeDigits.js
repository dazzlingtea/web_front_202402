// makeDigits
// 수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴

function makeDigits(num) {
    let str = '';
    for(let i = 1; i <= num; i++) {
        str += i;
    } 
    return str;   
}  
  
console.log(makeDigits(5));