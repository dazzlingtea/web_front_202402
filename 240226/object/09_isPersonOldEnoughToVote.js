// 09_isPersonOldEnoughToVote
// 객체를 입력받아 객체가 가진 age 속성값이 
// 합법적으로 투표할 수 있는 나이(18세 이상)인지 여부를 리턴해야 합니다.
// boolean 타입을 리턴해야 합니다.

function isPersonOldEnoughToVote(person) {
    return person.age >= 18;
}

// 삼항연산자 권장

let obj = {
    age: 19,
};

let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true