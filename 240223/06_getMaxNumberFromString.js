// getMaxNumberFromString
// 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴
// - 반복문(`for`)문을 사용해야 합니다.
// - `str.split` 사용은 금지됩니다.
// - 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

function getMaxNumberFromString(str) {
   let maxStr = '';
   if(str != '') {
    for(let i = 0; i < str.length; i++) {
        if(str[i] > maxStr) {
            maxStr = str[i];
        }
    }
    return maxStr; 
   } else {
    return '0';
   }
}

console.log(getMaxNumberFromString('53862'));