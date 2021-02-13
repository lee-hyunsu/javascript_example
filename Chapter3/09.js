const array1 = ['곰', '여우'];
const array2 = ['사자'];
const array3 = array1.concat(array2); //array1에 array2를 결합.
console.log(array3);

//연산자(...)사용하면 요소의 데이터가 전부 표시된 배열을 가져올 수 있음
const array4 = ['곰', '사자'];
console.log([...array4]); 

const array5 = ['곰', '사자'];
const array6 = ['여우'];
console.log([...array5, ...array6]);