const userDataList = [
    {id: 1, name: '토끼'},
    {id: 2, name: '닭'},
    {id: 3, name: '소'},
    {id: 4, name: '사자'},
    {id: 5, name: '원숭이'},
    {id: 6, name: '강아지'}
];

//데이터 표시 업데이트
function updateList(){
    let listHtml = '';

    for(const data of userDataList){
        listHtml += `<li>${data.id} : ${data.name}</li>`;
    }
    
    document.querySelector('.user_list').innerHTML = listHtml;
}

//오름차순 정렬
function sortByAscending(){
    userDataList.sort((a, b) => {
        return a.id - b.id;
    });

    updateList();
}

//내림차순 정렬
function sortByDescending(){
    userDataList.sort((a, b) => {
        return b.id - a.id;
    });

    updateList();
}

//오름차순 버튼 클릭 시 처리 작업
document.querySelector('.ascending').addEventListener('click', () => {
    sortByAscending();
});

//내림차순 버튼 클릭 시 처리 작업
document.querySelector('.descending').addEventListener('click', () => {
    sortByDescending();
});

//오름차순으로 초기 정렬
sortByAscending();