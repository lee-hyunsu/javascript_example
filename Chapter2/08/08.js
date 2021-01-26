//진릿값(true, false)
const myString = 'JavaScript를 배우자';

//includes는 문자열의 포함 여부를 확인
const a1 = myString.includes('JavaScript');
console.log(a1);

//startsWith는 문자열 시작 문자인지 확인
const a2 = myString.startsWith('배우자');
console.log(a2);

//endsWith는 문자열 종료 문자인지 확인
const a3 = myString.endsWith('배우자');
console.log(a3);

//연동코드
const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerHTML = targetString.includes('JavaScript');
document.querySelector('.result2').innerHTML = targetString.includes('배우자');
document.querySelector('.result3').innerHTML = targetString.includes('배우자', 12);
document.querySelector('.result4').innerHTML = targetString.includes('HTML');
document.querySelector('.result5').innerHTML = targetString.startsWith('배우자');
document.querySelector('.result6').innerHTML = targetString.endsWith('배우자');