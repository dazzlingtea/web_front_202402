foo = 'foo'
baf = 5
baz = true
// 위와 같은 변수를 가정할 때

// Number + Number -> 덧셈
baf += 2; // 7
console.log(`n+n: ${typeof baf}`);

// Boolean + Number -> 덧셈
baz += 1; // 2
console.log(`b+n: ${typeof baz}`);

// Boolean + Boolean -> 덧셈
baz += false; // 1
console.log(`b+b: ${typeof baz}`);

// Number + String -> 연결
baf += "foo"; // "5foo"
console.log(`n+s: ${typeof baf}`);

// String + Boolean -> 연결
foo += false; // "foofalse"
console.log(`s+b: ${typeof foo}`);

// String + String -> 연결
foo += "bar"; // "foobar"
console.log(`s+s: ${typeof foo}`);



let n = 0;
do {
	console.log('코드블록 내부의 코드는 최소 한 번은 실행됩니다.')
	n++;
} while (n < 3)