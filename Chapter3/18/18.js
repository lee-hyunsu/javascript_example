//아래 예제를 통한 콜백함수의 다양한 방법
const newArray = [10, 20, 30, 40].filter((value) => value >= 30);
console.log(newArray);

const newArray1 = [10, 20, 30, 40].filter((value) => {
    return value >= 30;
});

const newArray2 = [10, 20, 30 ,40].filter(function(value) {
    return value >= 30;
});

console.log(newArray1);
console.log(newArray2);