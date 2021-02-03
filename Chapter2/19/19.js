console.log(encodeURI('http://example.com/귀여운 고양이 페이지.html'));

//encodeURIComponent가 이스케이프 처리를 실행하는 문자의 종류가 더 많음.
//encodeURIComponent의 사용을 권장.
console.log(encodeURIComponent('http://example.com/귀여운 고양이 페이지.html'));

document.querySelector('#tweetButton').addEventListener('click', () => {
    //트윗 내용 가져오기
    let tweetText = document.querySelector('#tweetTextArea').value;

    //#JavaScript와 빈칸을 트윗 내용에 추가하기
    tweetText += ' #JavaScript';

    //인코딩
    const encodeText = encodeURIComponent(tweetText);

    //링크 작성
    const tweetURL = 
        `http://twitter.com/intent/tweet?text=${encodeText}`;

    //링크 연결
    window.open(tweetURL);
});