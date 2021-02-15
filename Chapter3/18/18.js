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

const userDataList = [
    {name: '곰', age: 18},
    {name: '사자', age: 31},
    {name: '호랑이', age: 46},
    {name: '강아지', age: 27},
    {name: '고양이', age: 42},
    {name: '생쥐', age: 22},
    {name: '기린', age: 19},
    {name: '얼룩말', age: 35}
];

//.button 요소의 이벤트 설정
document.querySelectorAll('.button').forEach((element) => {
    element.addEventListener('click', (event) => {
        onClickButton(event);
    });
});

//버튼 클릭 시 처리
function onClickButton(event){
    //클릭한 버튼의 요소
    const button = event.target;
    //버튼 요소에서 data-age가져오기
    const targetAge = button.dataset.age;
    //targetAge 이사의 유저 배열 생성
    const filterdList = userDataList.filter((data) => data.age >= targetAge);
    //배열 출력
    updateList(filterdList);
}

//유저 배열 출력
function updateList(filterdList){
    let listHtml = '';

    for (const data of filterdList) {
        listHtml += `<li>${data.name} : ${data.age}세</li>`;
    }

    document.querySelector('.user_list').innerHTML = listHtml;
}