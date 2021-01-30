const userName = '뿡뿡이';

const tag = `<div class="container">안녕하세요? ${userName} 님 </div>`;
console.log(tag);

const str = `123 x 123은 ${123*123}입니다.`;
console.log(str);

//오늘 날짜 불러오기
const today = new Date();

//#main내부의 HTML코드를 동적으로 작동하도록 처리하자.
document.querySelector('#main').innerHTML = `
    <h1>오늘${today.getMonth() + 1}/${today.getDate()}의 날씨</h1>
    <p><strong>제주는 맑음</strong></p>
`;