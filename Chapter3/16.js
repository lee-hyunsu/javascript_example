//문자 코드를 사용한 정렬은 대문자가 우선적으로 쓰인다,
//비교 함수 없이 정렬
const arr1 = ['grape', 'Orange', 'apple'];
arr1.sort();
console.log(arr1);

//localeCompare을 사용하게 되면 대소문자 구분 없이 정렬한다.
const arr2 = ['grape', 'Orange', 'apple'];
arr1.sort((a, b) => a.localeCompare(b));
console.log(arr2);