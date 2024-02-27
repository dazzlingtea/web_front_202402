// const [a, b, ...rest] = [10, 20, 30, 40, 50];

// // 질문: a, b, rest는 각각 어떤 값인가요?
// console.log(a);
// console.log(b);
// console.log(rest);

const {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
// 질문: a, b, rest는 각각 어떤 값인가요?

console.log(a);
console.log(b);
console.log(rest);

console.log('-----------');

function whois({displayName: displayName, fullName: {firstName: name}}) {
    console.log(displayName + " is " + name);
}
let user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
}
whois(user);