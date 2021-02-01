//toFixed 와 toPrecision은 문자열로 반환함.
console.log((0.33333).toFixed(2)); //0.33
console.log((123.5678).toFixed(1)); //123.6
console.log((2.4).toFixed(4)); //2.4000

console.log((0.33333).toPrecision(2)); //0.33
console.log((123.456).toPrecision(3)); //123

console.log((4.56).toPrecision(2)); //4.6
console.log((10).toPrecision(4)); // 10.00


//초 단위용 element
const secondElement = document.querySelector('.second');

//5 목표치 설정
const goalTime = new Date().getTime() + 5 * 1000;

update();

//프레임이 실행하는 함수
function update(){
    //현재 시각
    const currentTime = new Date().getTime();

    //목표치까지 남은 시간
    const leftTime = goalTime - currentTime;

    //남은 시간이 0초 미만이면 타이머 정지
    if(leftTime <= 0) {
        secondElement.innerText = '5초가 지났다.';
        return;
    }

    //초 단위 표시 및 밀리초는 소수점 2자리까지만.
    secondElement.innerText = (leftTime / 1000).toFixed(2);

    //프레임에서 update() 실행
    requestAnimationFrame(update);
}