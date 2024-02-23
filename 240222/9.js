// makeLastSeenMsg
// - 미접속 시간이 1시간 보다 적을 경우, 분 단위로 표기합니다.
// - 미접속 시간이 1시간 보다 크고 24시간 보다 적을 경우, 시간 단위로 **내림처리하여** 표기합니다.
// - 미접속 시간이 24시간 보다 클 경우, 일 단위로 **내림처리하여** 표기합니다.

let name = 'mike';
let period = 2887;

function makeLastSeenMsg(name, period) {
    
    let minutesMsg = `${name}: ${period}분 전에 접속함`;
    let hoursMsg = `${name}: ${Math.round(period/60)}시간 전에 접속함`;
    let daysMsg = `${name}: ${Math.round(period/60/24)}일 전에 접속함`;

    if(period < 60 && period >= 0) {
        console.log(minutesMsg);
    } else if (period < 24 * 60 ) {
        console.log(hoursMsg);
    } else if (period >= 24 * 60) {
        console.log(daysMsg);
    } else {
        console.log('Error');
    }
  }

makeLastSeenMsg(name, period);
