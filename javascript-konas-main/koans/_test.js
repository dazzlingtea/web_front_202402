function defaultParameter(num = 5) {
    console.log(num);
    return num;
  }
  
defaultParameter(10);
defaultParameter();
defaultParameter(8);



let age = 27;
let name = 'jin';
let height = 179;

function outerFn() {
  let age = 24;
  name = 'jimin';
  let height = 178;

  function innerFn() {
    age = 26;
    let name = 'suga';
    return height;
  }

  innerFn();

//   expect(age).to.equal(26);
//   expect(name).to.equal('jimin');

  return innerFn;
}

const innerFn = outerFn();

// expect(age).to.equal(27);
// expect(name).to.equal('jimin');
// expect(innerFn()).to.equal(178);

const emptyArr = [];
console.log(typeof emptyArr === 'array');
console.log(typeof emptyArr);
console.log(emptyArr.length);


const arr = ['peanut', 'butter', 'and', 'jelly'];
console.log(arr.slice(2, 2));