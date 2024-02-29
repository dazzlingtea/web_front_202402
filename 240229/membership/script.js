
console.log("hello")

let elUserName = document.querySelector('#username');
elUserName.value = "Lucky"

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

// console.log(elUserName);
// console.log(elFailureMessage);

// 아이디 입력창에서 입력된 값이
// 4글자 이상인 경우에는 성공 메시지를 출력하고 (div)
// 4글자 이하인 경우에는 실패 메시지를 출력해야 합니다. (div) 

elUserName.onkeyup = eventKeyUp; // 트리거

function eventKeyUp(e) {
    let currentValue = e.target.value;
    
    // 4글자 이상 이하 분기 필요
    if(checkStringLength(currentValue)) {
        // 4개 이상일 때 
        elFailureMessage.classList.add('hide');
        elSuccessMessage.classList.remove('hide');
    } else {
        // 4개 이하일 때
        elFailureMessage.classList.remove('hide');
        elSuccessMessage.classList.add('hide');
    }
}

function checkStringLength(str) {
	return str.length >= 4;
}

let passwordArr = document.querySelectorAll('.input-password');
// let elUserPwCheck = document.querySelector('#pwcheck');

let elPwLengthMessage = document.querySelector('.pwlength-message');
let elPwRuleMessage = document.querySelector('.pwrule-message');
let elMismatchedpwMessage = document.querySelector('.mismatchpw-message');
let elMatchedpwMessage = document.querySelector('.matchpw-message');


// function eventKeyUpPw(e) {
//     let currentPw = e.target.value;

//     if(checkStringHas(currentPw)) {
//         elPwRuleMessage.classList.add('hide');
//     } else {
//         elPwRuleMessage.classList.remove('hide');
//     }
// }

// function checkStringHas(str) {
//     // let strs = str;
//     const asciiArr = [33, 35, 36, 37, 38, 42, 64, 94];
//     // 특수문자나 숫자가 있으면 count 1씩 증가 
//     for(let letter in str) {
//         return asciiArr.includes(letter.charCodeAt());
//     }    
// }



// 두 군데 input을 배열로 받음
for(let i = 0; i < passwordArr.length; i++) {
    passwordArr[i].onkeyup = checkPassword;
}
function checkPassword(e) {

    if(/[!@\#$%^&*]/g.test(passwordArr[0].value + passwordArr[1].value)) {
        elPwRuleMessage.classList.add('hide');
    } else {
        if(passwordArr[0].value === '' && passwordArr[1].value === '') {
            elPwRuleMessage.classList.add('hide');
        } else {
            elPwRuleMessage.classList.remove('hide');
        }
        
    }
    // 둘 중 하나라도 비어 있다면        // 주석에 맞는 코드 추가 안한 상태
        // 입력 중일 경우 (앞에만 작성 중) 다 가려야 함
    if(passwordArr[0].value === '' || passwordArr[1].value === '') {
        elMatchedpwMessage.classList.add('hide');
        elMismatchedpwMessage.classList.add('hide');
    }
    // 비밀번호가 같은 경우
    else if(passwordArr[0].value === passwordArr[1].value) {
        // 특수문자가 있다면 -> 조건문
            // 성공 메시지 출력, 이외에 모두 가림
        // 특수문자가 없다면
            // 특수문자 입력 메시지를 출력 이외에 모두 가림
        elMatchedpwMessage.classList.remove('hide');
        elMismatchedpwMessage.classList.add('hide');
    } else {
        // 이외의 경우는 두 입력창 모두에 하나라도 문자열이 다 들어와 있어야 함
        // 그리고 두 문자열이 같지 않은 경우임
            // 특수문자가 있다면 -> 조건문
                // 비밀번호가 다름 메시지 출력 이외에 모두 가림
            // 특수문자가 없다면
                // 특수문자 입력 메시지를 출력 이외에 모두 가림
        elMatchedpwMessage.classList.add('hide');
        elMismatchedpwMessage.classList.remove('hide');

    }
}

// 특수문자 포함 여부 풀이 1 (반복문)
function checkSpecialCharacters(arr) {
    let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].value.length; i++) {
            if(specialCharacters.includes(arr[i].value[j])) {
                return true;
            }
        }
    }
    return false;
}

// 특수문자 포함 여부 풀이 2 (정규식)
let pattern = /[!@#$%^&*]+/;
// /[]+/   + 의미 : 대괄호 안에 하나 이상이라도 존재하면...
for(let i = 0; i < arr.length; i++) {
    return pattern.test(arr[i].value);
}




// elUserPwCheck.onkeyup = eventKeyUpPwCheck;
// function eventKeyUpPwCheck(e) {
//     // let currentPwCheck = e.target.value;
//     // console.log(currentPwCheck)
//     // let currentPw = elUserPwInput.value;
    
//     // 비밀번호와 비밀번호 확인이 일치 불일치 분기 필요
//     if(currentPw === '' || currentPwCheck === '') {
//         // 한 곳이라도 비어있다면 메세지 출력하지 않음
//         elMatchedpwMessage.classList.add('hide');
//         elMismatchedpwMessage.classList.add('hide');
//     }
//     else if(isMatch(currentPw, currentPwCheck)) {
//         // 일치
//         elMatchedpwMessage.classList.remove('hide');
//         elMismatchedpwMessage.classList.add('hide');
//     } else {
//         // 불일치
//         elMatchedpwMessage.classList.add('hide');
//         elMismatchedpwMessage.classList.remove('hide');
//     }
// }

// function isMatch(str1, str2) {
//     return str1 === str2;
// }

