const country = '대한민국';
const state = '서울';
// +를 이용한 문자 결합
console.log(country + state);
//문자 리터럴을 이용한 문자 결합.
console.log(`${country}${state}`);

//성 입력란
const familyNameText = document.querySelector('#familyNameText');

//이름 입력란
const firstNameText = document.querySelector('#firstNameText');

//성명
const fullName = document.querySelector('#fullName');

//문자가 입려될 때마다 실행되는 함수
function onKeyup(){
    //성
    const familyName = familyNameText.value;

    //이름
    const firstName = firstNameText.value;

    //성명 출력
    fullName.innerHTML = familyName + ' ' + firstName;

    //위 방법과 다른 방법
    //fullName.innerHTML = `${familyName} ${firstName}`;
}