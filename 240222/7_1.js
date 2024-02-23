let hour, minute, second;

hour = 23;
minute = 59;
second = 59;


function addOneSecond2(hour, minute, second) {
    let totalSeconds = hour * 3600 + minute * 60 + second + 1;

    let newHour = Math.floor(totalSeconds / 3600) % 24;
    let newMinute = Math.floor((totalSeconds % 3600) / 60);
    let newSecond = totalSeconds % 60;

    console.log(`1초 뒤에 ${newHour}시 ${newMinute}분 ${newSecond}초 입니다`);
}

addOneSecond2(hour, minute, second);