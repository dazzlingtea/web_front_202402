function createPhoneNumber(arr) {
    if(arr.length === 8) {
        arr.unshift(0, 1, 0);
    }
    let head = arr.slice(0, 3).join('');
    let body = arr.slice(3, 7).join('');
    let tail = arr.slice(7).join('');

    let result = `(${head})${body}-${tail}`;
    return result;
}

// let head = '(010)';
// const len  = arr.length;
// const body = arr.slice(len - 8, len - 4).join('');
// const tail = arr.slice(len - 4, len).join('');

// if(len === 11) {
//     head = `${arr.slice(0, 3).join}`;
// }



let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
console.log(output); // --> '(010)1234-5678'

output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);
console.log(output); // --> '(010)8765-4321'

output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);
console.log(output); // --> '(011)4321-8765'