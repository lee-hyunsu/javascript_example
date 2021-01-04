//0이상 1미만 임의의 소수
console.log(Math.random());
//0이상 100미만 임의의 정수
console.log(Math.floor(Math.random() * 100));
//10이상 20미만 임의의 정수
console.log(10 + Math.floor(Math.random() * 10));

//직사각형을 불러오고,
const rectangle = document.querySelector('.rectangle');

//버튼 클릭 시 onClickButton() 실행
document.querySelector('.button')
addEventListener('click', onClickButton);

function onClickButton() {
    const randomHue = Math.trunc(Math.random() * 360);

    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;

    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end', randomColorEnd);
}