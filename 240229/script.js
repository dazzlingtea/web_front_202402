console.log("잘 접속 될까요?");

let menus = document.querySelectorAll("button"); //모든 버튼을 가져옵니다.

let btnAmericano = menus[0];
let btnCaffelatte = menus[1];

btnAmericano.onclick = handleClick;
btnCaffelatte.onclick = handleClick; // for 문으로도 충분히 구현할 수 있는 내용입니다.

function handleClick(e) {
  // 아래의 빈칸(____)을 채우세요.
  let currentMenu = e.target.textContent; // TODO
//   console.log(currentMenu);
  console.log(currentMenu + "를 클릭하셨습니다.");
}