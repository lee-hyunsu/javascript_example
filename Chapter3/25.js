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
//const copiedObject1 = {...object2}
//위 주석 내용은 스프레드 연산자를 사용해 코드를 간략하게 만든다.
//즉 위 주석처럼 간략하게 사용해도 상관없음

console.log(copiedObject1); // object1의 내용이 복사됨.


//복사 전 데이터 객체
const object2 = {
    id: 1,
    members: ['사자', '토끼', '호랑이']
};

//객체의 복사
const copiedObject2 = {...object2};

//복사 전 객체 members속성의 배열을 수정
object2.members[0] = 'John';

//복사된 members속성의 배열도 영향을 받음.
console.log(copiedObject2.members[0]);