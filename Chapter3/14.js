const array1 = [1, 2, 3, 4, 5, 6];

array1.sort((a, b) => {
    //a가 b보다 작으면 a, b 순서로 정렬
    if(a < b){
        return 1;
    }

    //a와 b가 같으면 정렬 순서 변화 없음
    if(a === b){
        return 0;
    }

    //a가 b보다 크면 b, a 순서로 정렬
    if(a > b){
        return -1;
    }
})

console.log(array1);