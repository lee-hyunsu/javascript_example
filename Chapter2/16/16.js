console.log(/J/.test('JavaScript')); //J가 JavaScript에 포함되어 있는지
console.log(/^iP/.test('iPhone')); //시작문자가 iP인지 여부
console.log(/\d/.test('레시피')); //'레시피' 문자열 내 숫자 포함 여부
console.log(/Java.*/.test('JavaScript')); //Jav 다음의 문자 a가 0회 이상 존재 여부
console.log(/코.*피/.test('코드 레시피')); //코피 혹은 코, 피 사이의 문자 존재 여부
console.log(/\d+-\d+-\d+/.test('010-7587-3955')); //숫자-숫자-숫자의 형식 여부

//전화번호 입력
const phoneNumberText = document.querySelector('#phoneNumberText');
//경고 메시지
const warningMessage = document.querySelector('#warningMessage');

//문자가 입력될 때마다 내용 체크하기
phoneNumberText.addEventListener('keyup', () => {
    //입력된 전화번호
    const phoneNumber = phoneNumberText.value;
    //전화번호에 (-)이 포함되면 공백(' ')으로 변환
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, ''); //01075873955

    //0으로 시작하는 10자리 혹은 11자리의 번호 형식 체크
    if(/^[0][0-9]{9, 10}$/.test(trimmedPhoneNumber) === false) {
        warningMessage.innerText = '전화번호의 형식에 맞춰 입력해 주세요.';
    } else {
        warningMessage.innerText = '';
    }
});