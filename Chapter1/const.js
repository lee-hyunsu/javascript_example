//상수 const는 값 변경이 불가능
//상수 myName에 '이현수'대입
const myName = "이현수";

//myName을 alert()로 출력
alert(myName);

//에러 발생 코드
/*cosnt myName = '자바스크립트';

//myName은 값의 변경이 불가능
myName = '스크립트'; */



//숫자형 데이터 상수 간의 덧셈
const number1 = 10;
const number2 = 20;
const sum = number1 + number2;
alert(sum);

//문자열 상수의 결합
const firstName = '이';
const familyName = '현수';
const fullName = firstName + familyName;
alert(fullName);

//상수 const의 초기화는 생략이 불가능



//상수로 선언된 배열과 객체 내부의 값은 변경 가능
//상수로 선언된 배열
const myArray = ['컴공', '3학년', '이현수'];
myArray[0] = '제주대학교';
alert(myArray);

//객체 내부의 값
const myObject = { id : 675, name : '현수'};
myObject.name = '이현수';
console.log(myObject);