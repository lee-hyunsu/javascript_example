const myArray = ['사자', '원숭이', '얼룩말', '코끼리'];

//배열에서 '사자'를 가져오기
const targetUser = myArray.find((element) => element === '사자')

//다음과 같이 표기할 수도 있음.
/* const targetUser = myArray.find(element => {
    return element === '사자'
}); */

console.log(targetUser);