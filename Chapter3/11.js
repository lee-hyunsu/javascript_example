//indexOf는 요소의 인덱스 위치 검색 = 숫자
//lastIndexOf는 끝에서부터 요소 위치 검색 = 숫자
//includes는 요소의 포함 여부 확인 = 진릿값

console.log(['사과', '바나나', '귤'].indexOf('바나나')); // 1
console.log([0, 2, 4, 6, 4, 2, 0].indexOf(4)); // 2
console.log([0, 2, 4, 6, 4, 2, 0].lastIndexOf(4)); // 4

console.log(['사과', '딸기', '귤'].includes('사과')); //true
console.log([0, 2, 4, 6, 4, 2, 0].includes(3)); //false