const myArray = ['사자', '원숭이', '얼룩말', '코끼리'];

//배열에서 '사자'를 가져오기
const targetUser = myArray.find((element) => element === '사자')

//다음과 같이 표기할 수도 있음.
/* const targetUser = myArray.find(element => {
    return element === '사자'
}); */

console.log(targetUser);

//12.html
const userDataList = [
    {id: 123, name: '곰'},
    {id: 1997, name: '현수'},
    {id: 2021, name: '소'}
];

//검색 ID 입력창
const searchIdInput = document.querySelector('#search-id-input');

//검색 결과 표시창
const searchResult = document.querySelector('#search-result');

//문자가 입력될 때마다 내용 체크
searchIdInput.addEventListener('keyup', () => {
    //검색 ID가져오기
    const searchId = Number(event.target.value);
    findUser(searchId);
});

//유저 검색
function findUser(searchId){
    //해당 데이터 가져오기
    const targetData = userDataList.find((data) => data.id === searchId);

    //해당 데이터가 없으면 '유저 검색 결과 없음' 표시 후 종료
    if(targetData == null){
        searchResult.textContent = '유저 검색 결과 없음';
        return;
    }

    //검색 결과의 이름을 표시
    searchResult.textContent = targetData.name;
}