// makeDigits2
//- 반복문(`while`)문을 사용해야 합니다.
// - `for`문 사용은 금지됩니다.
// - 숫자(number string) 사이를 '-'로 구분합니다. ('1-2-3-4-5')

function makeDigits2(num) {
    let str = '1';
    let i = 2;
    while(i <= num) {
        str += '-' + i;
        i++
        // if(i <= num) {
        //     str += '-';
        // }
    }
    return str;   
}
  
console.log(makeDigits2(6));

// 결과에 1을 넣어두고 '-2' ... 반복하면 조건문을 안 쓸 수 있음
