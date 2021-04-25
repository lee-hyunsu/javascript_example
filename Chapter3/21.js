let a;
let b;
let c;
[a, b, c] = [1, 2, 3];
console.log(a, b, c); //결과: 1, 2, 3

const array = ['곰' , '여우'];
[array[0], array[1]] = [array[1], array[0]];
console.log(array); //결과: ["여우", "곰"]
//배열 내 요소의 순서가 변함.