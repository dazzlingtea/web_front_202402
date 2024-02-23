// addOneSecond
// 1초 뒤에 {hour}시 {minute}분 {second}초 입니다 리턴
// 1초 뒤에 {hour}시 {minute}분 {second}초 입니다 형식으로 리턴

let hour = 22;
let minute = 58;
let second = 58;

function addOneSecond(hour, minute, second) {
    
    if (second === 59) {
        second = 0;
        if(minute === 59) {
            minute = 0;
            if(hour === 23) {
                hour = 0;
            } else {
                hour += 1;
            }
        } else {
            minute += 1;
            if(hour === 23) {
                hour = 0;
            } else {
                hour += 1;
            }
        }
    } else {
        second += 1;
        if(minute === 59) {
            minute = 0;
            if(hour === 23) {
                hour = 0;
            } else {
                hour += 1;
            }
        } else {
            minute += 1;
            if(hour === 23) {
                hour = 0;
            } else {
                hour += 1;
            }
        }
    }
    console.log(`1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`);
  }

addOneSecond(hour, minute, second);

