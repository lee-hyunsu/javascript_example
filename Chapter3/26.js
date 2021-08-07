//개인의 정보 데이터 객체
const userData = {
    id: 1,
    name: '사자',
    age: 25
};

console.log(userData.hasOwnProperty('id')); //결과: true
console.log(userData.hasOwnProperty('address')); //결과: false 
console.log('id' in userData);