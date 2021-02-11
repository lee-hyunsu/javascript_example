const array1 = ['사과', '귤', '바나나'];
const shiftedValue = array1.shift(); //첫 위치의 요소 삭제
console.log(shiftedValue); //결과 : '사과'(삭제된 요소)
console.log(array1); //결과 : ['귤', '바나나'](삭제 작업 후의 배열)

const array2 = ['사과', '귤', '바나나'];
const poppedValue = array2.pop(); //마지막 위치의 요소 삭제
console.log(poppedValue); //결과 : '바나나'(삭제된 요소)
console.log(array2); //결과 : ['사과', '귤'](삭제 작업 후의 배열)
