// 19_extend
// 두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가
// 별도의 리턴문(return statement)을 작성하지 않습니다.
// - 추가하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둡니다.
// - 두번째 객체는 수정하지 않아야 합니다.

function extend(obj1, obj2) {
  let key2 = Object.keys(obj2);

  for(let i = 0; i < key2.length; i++) {
    if(!obj1.hasOwnProperty(key2[i])) {
      obj1[key2[i]] = obj2[key2[i]];
    }
  }

}

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  b: 4,
  c: 3,
};

extend(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}