//원하는 문자열의 위치
const myString = 'JavaScript를 배우자';

//JavaScript는 첫 번째 문자열이기 때문에 0
const a1 = myString.indexOf('JavaScript');
console.log(a1);

//두 번째 문자열이자 12
const a2 = myString.indexOf('배우자');
console.log(a2);

//a가 마지막에 나오는 위치 3
const a3 = myString.lastIndexOf('a');
console.log(a3);

//지정한 문자열을 찾을 수 없음 -1
const b1 = myString.indexOf('HTML');
console.log(b1);

//대소문자를 구별하기 때문에 -1
const b2 = myString.indexOf('j');
console.log(b2);

//연동 코드
const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerHTML = targetString.indexOf('JavaScript');
document.querySelector('.result2').innerHTML = targetString.indexOf('배우자');
document.querySelector('.result3').innerHTML = targetString.indexOf('JavaScript', 5);
document.querySelector('.result4').innerHTML = targetString.indexOf('HTML');
document.querySelector('.result5').innerHTML = targetString.indexOf('a');
document.querySelector('.result6').innerHTML = targetString.lastIndexOf('a');