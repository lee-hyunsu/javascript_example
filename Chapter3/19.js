//3개의 값을 가지는 배열
const priceList = [100, 500, 900];

//합계를 지정하는 변수
const sum = priceList.reduce((previous, current) => {
    return previous + current; //합계
});

console.log(sum);



//------------2차배열을 1차배열로 만드는 플래트닝----------

const array = [['바나나', '사과', '딸기'], ['귤', '포도']];

const flattendArray = array.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
});

console.log(flattendArray);