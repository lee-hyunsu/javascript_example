//index에 0대입
//index < 10 조건에 만족하여 0출력
//index++가 실행되어 index가 1이 됨
//9가 될 때까지 반복하다가 10이 되는 순간 for문 종료
for(let index = 0; index < 10; index++){
    alert(index);
}



//while문
//반복 조건만을 지정함.
let myNumber = 0;

while(myNumber < 10){
    alert(myNumber);
    myNumber += 1; //myNumber에 1을 더함
}




//continue문
//반복 처리 중 특정 조건에 대해 스킵하고 싶을 때
//for문 루프 중 처리를 스킵하고 싶을 때
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){ // i가 짝수인 경우 아래는 실행되지 않고 넘어감.
        continue;
    }
    alert(i); //홀수만 출력
}
alert('루프 종료'); //루프가 끝나면 실행



//함수식
function myFunction(flagA){
    for(let j = 0; j < 10; j++){
        if(flagA === false){
            continue;
        }

        if(j % 2 === 0){
            continue;
        }
            console.log(j);
    }
}
myFunction(true);