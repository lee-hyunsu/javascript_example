console.log('5'.padStart(2, '0')); //전체길이는 2, 추가문자 0 
console.log('ff'.padEnd(6, '0')); //전체길이는 6, 추가문자 0

const hourElement = document.querySelector('.hour');

const minuteElement = document.querySelector('.minute');

const secondElement = document.querySelector('.second');

update();

//현재 시간 표시 처리
function update(){
    const currentTime = new Date();

    //시간 표시
    const hour = currentTime.getHours();
    hourElement.innerText = addZeroPadding(hour);

    //분 표시
    const minute = currentTime.getMinutes();
    minuteElement.innerText = addZeroPadding(minute);

    //초 표시
    const second = currentTime.getSeconds();
    secondElement.innerText = addZeroPadding(second);

    //프레임에서 update()실행
    requestAnimationFrame(update);
}

//2자리 형식이 되도록 앞부분에 0을 추가하는 함수
function addZeroPadding(num){
    return String(num).padStart(2, '0');
}