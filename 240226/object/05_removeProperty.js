// 05_removeProperty
// 객체와 키를 입력받아 키가 가리키는 속성(property)을 제거

function removeProperty(obj, property) {
    delete obj[property];
}

const obj = {
    name: 'Sam',
    age: 20,
};

removeProperty(obj, 'name');
console.log(obj.name); // --> undefined