let user = {
	firstName: 'Steve',
	lastName: 'lee',
	email: 'steve@google.com',
	city: 'Seoul',
    gender: 'male',
    country: 'USA'
};

console.log(`firstName: ${user.firstName}`);
console.log(`lastName: ${user.lastName}`);
console.log(`email: ${user.email}`);
console.log(`city: ${user.city}`);
console.log(`gender: ${user.gender}`);


let tweet = {
    writer : 'stevelee',
    createdAt : '2019-09-10 12-03:33',
    content : '프리 코스 재밌어요!'
}

let content = 'content';
console.log(tweet['content']);
console.log(tweet[content]); // content is not defined
tweet['content'] === tweet.content; // true

user.race = 'asian';
console.log(user);

let snack = "snack";
user[snack];

delete user.gender;
console.log(user);

delete user.color;
console.log(user);

let asdf = 'country';
delete user[asdf];
console.log(user);

'city' in user;
console.log('city' in user);
'color' in user;
console.log('color' in user);

let tw = "content";
tw in tweet;

let player = {
    name : 'JS Park',
    age : 42,
    isRetired : true,
    country : 'Republic of Korea'
};
delete player['age'];
console.log(player.age);
console.log(player);



console.log('for..in 객체 순회')
// for ... in 
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    console.log(key);
}
