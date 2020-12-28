//a + 2의 결과를 반환하는 함수
function myFunction(a){
    const result = a + 2;
    return result;
}



//파라미터의 개수 제한이 없음.
function calcSum(a, b, c){
    const result = a + b + c;
    return result;
}
alert("a + b + c의 값은 " + calcSum(1, 2, 3) + "입니다."); // 6출력
//인수가 3개보다 적을 때
alert("a + b + c의 값은 " + calcSum(1, 2) + "입니다."); // 인수로 1,2을 전달 후 함수 호출 NaN출력




function oneFunction(a, b){
    //a가 100이상이면 a반환
    if(a >= 100){
        return a;
    }
    //a가 100미만이면 b를 반환
    return b;
}



function twoFunction(price, tax){
    const result = price + price * tax;
    return result;
}
//전달할 파라미터가 있으면 ()안에 적는다.
const myResult = twoFunction(100, 0.1);
alert((myResult)); // 110출력



function threeFunction(){
    alert('안녕하세요.');
}
threeFunction() //안녕하세요. 출력

