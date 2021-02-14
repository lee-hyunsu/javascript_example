const idList = [4, 10, 20];
const userIdList = idList.map((value) => `userid_${value}`);
console.log(userIdList);


const idList1 = [3, 8, 12];
const userIdList1 = idList1.map((value, index) => `userid_${index+1}_${value}`);
console.log(userIdList1);

const apiResponseData = [
    {id: 1, name: '곰'},
    {id: 2, name: '사자'},
    {id: 3, name: '호랑이'}
];

const idList2 = apiResponseData.map((value) => value.id);

console.log(idList2);