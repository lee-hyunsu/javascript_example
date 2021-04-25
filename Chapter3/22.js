/* 피셔 예이츠 알고리즘의 이해 */
/* 5개의 요소[0, 1, 2, 3, 4]를 가지는 배열을 생각해보면,
   1. for문 i에 4, 3, 2, 1, 0 대입
   2. Math.random()은 0 이상 1 미만의 값이 반환되므로 randomIndex는 0이상 i 이하
        주요 포인트는 다음의 두 가지
        1. 요소 전체가 처리 대상이 된다.
        2. 한 번 처리된 요소는 다시 작업 대상이 되지 않는다.*/

const array = [1, 2, 3, 4, 5];

const arrayLength = array.length;

//피셔 예이츠 알고리즘
for (let i = arrayLength - 1; i >= 0; i--){
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
}

console.log(array);

/*--------------------------------------------------------------------------------------- */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled1 = shuffleArray(array1);
console.log(shuffled1); // 결과: [5, 1, 8, 3...(생략)]
const array2 = ['사자', '여우', '곰', '호랑이', '기린'];
const shuffled2 = shuffleArray(array2);
console.log(shuffled2); // 결과: [“기린”, “사자”, “곰”, “여우”, “호랑이”]
/**
 * 배열 셔플
 * 기존 배열의 변경없이 새로운 배열을 반환
 * @param sourceArr 기존 배열
 * @returns 셔플된 배열
 */
function shuffleArray(sourceArr) {
  // 기존 배열의 복제 생성
  const array = sourceArr.concat();
  // Fisher Yates 알고리즘
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}