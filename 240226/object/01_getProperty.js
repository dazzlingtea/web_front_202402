// 01_getProperty


function getProperty(obj, property) {
    return obj[property]
}

const person = {
    name: 'Steve',
    age: 16,
  };

  
  let output = getProperty(person, 'name');
  console.log(output); // --> 'Steve'
  
  output = getProperty(person, 'age');
  console.log(output); // 

  output = getProperty(person, 'lastName');
  console.log(output); // 