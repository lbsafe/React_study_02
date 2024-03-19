// 5가지의 요소 순회 및 탐색 메서드

// 1. forEach
// -> 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach((item, index, arr)=>{
    // console.log(index, item*2);
});

let doubledArr = [];

arr1.forEach((item, index, arr)=>{
    doubledArr.push(item*2);
});

// console.log(doubledArr);


// 2. includes
// -> 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(10);

// console.log(isIncludes);


// 3. indexOf
// -> 특정 요소의 index(위치)를 찾아서 반환하는 메서드
// -> 같은 요소가 여러개가 존재한다면 첫번째 요소의 index를 반환한다.
// -> 존재하지 않는 요소를 찾으면 -1을 반환한다.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);

// console.log(index);


// 4. findIndex
// -> 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// -> 특정 요소의 index(위치)를 반환하는 메서드
// -> 조건에 만족하는 요소가 없으면 -1을 반환한다.
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=>{
    if(item % 2 !== 0){
        return true;
    }
});

// console.log(findedIndex);

/*
    indexOf 가 아닌 findIndex 사용하는 이유는
    indexOf는 얕은 비교로만 진행하기에 객체 값은 찾지 못한다.

    findIndex는 콜백함수를 이용하여 특정 프로퍼티 값을 기준으로
    비교하기에 복잡한 개체값도 조건식을 통해 찾아 낼 수 있다.

    indexof = 원시타입의 값을 찾을 때 사용
    findIndex = 복잡한 객체 타입의 값을 찾을 때 사용
*/

let objArr = [
    {name: "오건희"},
    {name: "오거니"},
]

// // 반환 불가능 값을 찾지 못함
// console.log(
//     objArr.indexOf({name:"오건희"})
// );

// // 반환 가능
// console.log(
//     objArr.findIndex((item)=>{
//         if(item.name === "오거니"){
//             return true;
//         }
//     })
// )


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 그대로 반환
// 아래 예시 {name:"오건희"} 반환
let arr5 =[
    {name:"오건희"},
    {name:"오거니"}
]

const finded = arr5.find((itme)=>itme.name === "오건희");
console.log(finded);