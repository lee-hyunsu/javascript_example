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
phoneNumber.replace('-', ''); //0107587-3955 출력