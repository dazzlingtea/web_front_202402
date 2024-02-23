//정육면체 주사위 두 개를 굴려서 나올 수 있는 모든 경우의 수

for (let i = 1; i <= 6; i++) {
    for(let j = 1; j <= 6; j++) {
        console.log(`첫번째 주사위는 ${i}, 두번째 주사위는 ${j}입니다.`);
    }
}

// 실습 삼중 반복문
for (let first = 0; first <= 3; first++) {
    for (let second = 0; second <= 3; second++) {
      for (let third = 0; third <= 3; third++) {
        console.log(
          `first는 ${first}, second는 ${second}, third는 ${third}입니다.`);
      }
    }
}

// 이중 반복문으로 구구단 2단 ~ 9단 전체 출력

for(let firstNum = 2; firstNum <= 9; firstNum++) {
    console.log(`${firstNum}단 시작합니다`);
    for(let secondNum = 1; secondNum <= 9; secondNum++) {
        console.log(`${firstNum} X ${secondNum} = ${firstNum * secondNum}`);
    }
    console.log(`${firstNum}단 끝났습니다`);
    console.log('');
}
