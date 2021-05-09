const object1 = {
    result: true,
    members: [
        { id: 1, name: '현수'},
        { id: 2, name: '사자'},
        { id: 3, name: '호랑이'}
    ]
};

//객체를 복사
const copiedObject1 = Object.assign({}, object1);

console.log(copiedObject1); // 위 object1의 내용이 복사됨.