// 무한루프
// let num = 1;
// while (num > 0) {
// 	console.log(num);
// 	num++;
// }
//  console.log("while loop exit")



let str = 'javascript';
let idx = 0;

// while(idx < str.length) {
//     console.log(str[idx]);
//     idx++;
// }

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// 요즘은 잘 안 쓰는 방식
// 필요없을 때도 계속 조건식을 체크해야해서 성능이슈 O
while(true) {
    if(idx >= str.length) {
        break;
    }
    console.log(str[idx]);
    idx++;
}