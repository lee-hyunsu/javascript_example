const object = {}; // 빈 객체

//개인의 정보 데이터 객체
const person ={
    id: 1,
    name: '현수',
    age: 25
};

//값 확인하기
console.log(person.id); // 결과 : 1
console.log(person['name']); // 결과 : 거북이

//값의 변경
person.id = 2;
person['name'] = '이현수';
console.log(person.id); // 결과 : 2
console.log(person['name']); // 곃과 : 이현수


//------------------------------------------------------------

//API의 response 데이터를 다루는 객체
const response = {
    result: true,
    list: [{ id: 1, name: '현수', age: 25},
           { id: 2, name: '사자', age: 32}]
};

//데이터 확인
console.log(response.list[0].name); // 결과 : 호랑이

//값의 변경
response.list[1].age = 51;
console.log(response.list[1].age); // 결과 : 51


//------------------------------------------------------------

//클래스 데이터 객체
const myClass = {
    method1: function(){
        console.log('메소드1 실행');
    },
    
    method2: () => {
        console.log('메소드2 실행');
    }
};

myClass.method2(); // "메소드2 실행 출력"