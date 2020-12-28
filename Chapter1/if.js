//const는 값이 바뀌지 않으므로 100 고정
const myPrice = 100;
//'myPrice'의 값은 50이상입니다.'만 출력하고 나머지는 실행되지 않음.
if(myPrice >= 50){
    alert('myPrice의 값은 50이상입니다.');
} //상수의 값을 20으로 설정 시 실행 
else if(myPrice >= 10){
    alert('myPrice의 값은 10이상 50미만입니다.');
} //상수의 값을 1로 설정 시 실행 
else{
    alert('myPrice의 값은 10미만입니다.');
}




//조건이 참일 때 실행, else가 필요 없음
if(true){
    alert('Hello');
}


//else if가 필요 없음
const randomNum = Math.random() * 10;
if(randomNum >= 5){
    alert('randomNum의 값은 5이상입니다.');
} else {
    alert('randomNum의 값은 5미만입니다.');
}