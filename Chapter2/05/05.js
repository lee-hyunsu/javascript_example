//텍슽트 영역
let textarea = document.querySelector('.textarea');
//입력 중인 문자 수
let string_num = document.querySelector('.string_num');
//텍스트를 입력할 때 마다 이벤트 발생
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp(){
    //입력된 텍스트
    const inputText = textarea.value;
    //문자 수 반영
    string_num.innerText = inputText.length;
}