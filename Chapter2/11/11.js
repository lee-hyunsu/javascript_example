//문자열을 다른 문자열로 바꾸고 싶을 때
//문자열 내 불필요한 줄바꿈 코드를 <br>로 바꾸고 싶을 때
//빈칸을 제거하고 싶을 때

//image1.png를 image2.png로 바꿈
const imageName = 'image1.png';
imageName.replace('1.png', '2.png'); //image2.png로 바꿈

//문자열 내 줄바꿈 코드를 제거
const inputText = '제이/n-펍';
inputText.replace('/n', ''); //제이-펍

let phoneNumber = '010-7587-3955';
console.log(phoneNumber.replace('-', '')); //0107587-3955 출력
console.log(phoneNumber.replace(/-/g, '')); //01075873955 출력


//  #submitButton 클릭 시의 처리 작업 설정
document.querySelector('#submitButton').addEventListener('click', (event) => {
    // 전화번호 가져오기
    const phoneNumber = document.querySelector('#phoneNumberText').value;
  
    // 전화번호에 하이픈(-)이 삽입된 경우 ‘ ‘(공백)으로 변환
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
    // 01012345678
    alert(`전화번호는 ${trimmedPhoneNumber}입니다.`);
  
    // 버튼의 기본 작동을 해제
    event.preventDefault();
  });