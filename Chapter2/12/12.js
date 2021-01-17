const myUrl = 'http://www.example.com/?id=123456&name=lion&age=28';
console.log(myUrl.split('&'));
console.log(myUrl.split(/&|\?/));

const Java = 'JavaScript';
console.log(Java.split(''));
console.log(Java.split());


//해시 데이터 보관을 위한 객체
const hashes = {};

//URL의 파라미터를 배열로 가져오기
const parameters = location.search.split(/&|\?/).filter((value) => {
    return value.includes('=');
});

//hashes [key]=value의 형태로 객체에 보관.
parameters.forEach((parameter) => {
    const parameterList = parameter.split('=');
    const key = parameterList[0];

    //value 디코딩
    const value = decodeURIComponent(parameterList[1]);

    hashes[key] = value;
});

//파라미터 데이터 처리

//hashes에 id가 포함된 경우 처리 작업
if(hashes['id'] != null) {
    document.querySelector('.id').innerHTML = hashes['id'];
}
//hashes에 name이 포함된 경우 처리 작업
if(hashes['name'] != null) {
    document.querySelector('.name').innerHTML = hashes['name'];
}
//hashes에 age가 포함된 경우 처리 작업
if(hashes['age'] != null) {
    document.querySelector('.age').innerHTML = hashes['age'];
}