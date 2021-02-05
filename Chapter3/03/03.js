const array = ['딸기', '귤', '사과'];

//forEach()는 map(), filter() 등의 반환값을 그대로 루프 처리 할 수 있음.
//forEach()문은 array객체에서만 사용가능한 메서드
//콜백 함수는 해당 요소 데이터, 인덱스, 기존 배열 정보를 가져온다.
array.forEach((value, index, arr2) => {
    //인덱스와 값을 순서대로 출력
    console.log(index, value, arr2);
});
