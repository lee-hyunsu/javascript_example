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