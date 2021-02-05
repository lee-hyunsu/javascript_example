const array = ['딸기', '귤', '사과'];

//forEach()는 map(), filter() 등의 반환값을 그대로 루프 처리 할 수 있음.
//forEach()문은 array객체에서만 사용가능한 메서드
//콜백 함수는 해당 요소 데이터, 인덱스, 기존 배열 정보를 가져온다.
array.forEach((value, index, arr2) => {
    //인덱스와 값을 순서대로 출력
    console.log(index, value, arr2);
});

[1, 2, 3, 4, 5, 6, 7, 8]
    //짝수의 배열 생성
    .filter((value) => value % 2 === 0)
    //배열의 짝수 값을 처리
    .forEach((value) => {
        console.log(value);
    }); //결과 : 2, 4, 6, 8 출력

//API 등을 통해 가져오는 출력용 데이터 배열
const userList = [
    {id: 1, name: '홍길동', address: '제주'},
    {id: 2, name: '흥부', address: '서울'},
    {id: 3, name: '놀부', address: '부산'}
];

const container = document.querySelector('.container');

//userList배열의 각 요소별 루프 처리
userList.forEach((userData) => {
    //각 요소별 데이터 쓰기
    container.innerHTML += `
        <div class="card">
            <h2>${userData.id}. ${userData.name}</h2>
            <p>지역: ${userData.address}</p>
        </div>
    `;
});