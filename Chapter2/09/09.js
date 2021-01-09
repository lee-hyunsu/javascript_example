//지정한 위치의 문자 추출
console.log('JavaScript'.charAt(3)); //a
console.log('JavaScript'.charAt()); //J

//검색어
const searchWordText = document.querySelector("#search-word-input");

//지역 리스트
const areaList = document.querySelectorAll("#area-list button");

searchWordText.addEventListener('keyup', () => {
    //입력한 검색어
    const searchWord = searchWordText.value;

    //지역 리스트의 루프 처리
    //element는 각 요소에 해당함
    areaList.forEach((element) => {
        //검색어가 없으면 모든 요소를 표시
        if(!searchWord || searchWord === ''){
            element.classList.remove('hide');
            return;
        }

        //데이터 name 가져오자
        const areaName = element.dataset.name;
        //데이터 영문 name 가져오기
        const phonetic = element.dataset.phonetic;

        //검색어와 첫 번째 글자 일치 여부에 따라 hide 클래스 사용 결정
        //hide클래스가 사용된 요소는 화면에 표시하지 않음
        if(
            searchWord.charAt(0) === areaName.charAt(0) ||
            searchWord.charAt(0) === phonetic.charAt(0)
        ) {
            //검색어의 첫 번째 글자가 일치하는 경우 hide클래스 젝
            element.classList.remove('hide');
        } else{
            //검색어의 첫 번째 글자가 일치하지 않는 경우 hide클래스를 추가
            element.classList.add('hide');
        }
    });
});
