// 03_addPropertyAndValue

function addPropertyAndValue(obj, property, value) {
    obj[property] = value;
}

let steve = {};
addPropertyAndValue(steve, 'isMale', true);
console.log(steve.isMale); // --> true

addPropertyAndValue(steve, 'age', 30);
console.log(steve.age); // --> 30

let jessica = {};
addPropertyAndValue(jessica, 'job', 'Programmer');
console.log(jessica.job); // --> 'Programmer'
  