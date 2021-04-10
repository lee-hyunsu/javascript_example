//3개의 값을 가지는 배열
const priceList = [100, 500, 900];

//합계를 지정하는 변수
const sum = priceList.reduce((previous, current) => {
    return previous + current; //합계
});

console.log(sum);