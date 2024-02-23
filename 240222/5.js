// checkAge

let name = 'Kimcoding';
let age = 21;

function checkAge(name, age) {
    if(age >= 21) {
        console.log(`Welcome, ${name}!`);
    } else {
        console.log(`Go home, ${name}!`);
    }
}

checkAge(name, age);