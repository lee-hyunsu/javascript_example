const myFruit = '참외';
//사과가 아니면 다음 코드 실행 = 참외가 맞으면 break 실행 및 처리 중단
switch(myFruit){
    case '사과':
        alert('사과입니다.');
        break;
    case '참외':
        alert('참외입니다.');
        break;
    default:
        alert('가티 과일입니다.');
        break;
}



//switch문의 데이터 타입 비교(===)
const yourFruit = '100';

switch(yourFruit){
    case 100: //데이터 타입이 문자열이기 때문에 출력이 안됨.
        alert('숫자 타입이 100입니다.');
        break;
    default:
        alert('숫자 타입이 100이 아닙니다.');
        break;
}