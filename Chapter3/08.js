const array3 = ['사과', '귤'];
array3.splice(1, 0, '바나나'); //인덱스 1의 위치에서 0개의 요소를 삭제하고, '바나나'를 추가함
console.log(array3);

const array4 = ['사과', '귤'];
array4.splice(1, 1, '바나나', '딸기'); //인덱스 1의 위치에서 1개의 요소를 삭제하고, '바나나'와'딸기'를 추가
console.log(array4);