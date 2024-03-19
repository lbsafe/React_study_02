// 5가지의 배열 변형 메서드

// 1. filter
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여
//    새로운 배열로 반환

let arr1 = [
    {name: "오건희", hobby: "영화감상"},
    {name: "오거니", hobby: "영화감상"},
    {name: "뿌까", hobby: "공놀이"},
]

const filterArr1 = arr1.filter((item)=>{
    if(item.hobby === "영화감상"){
        return true;
    }
});

// console.log(filterArr1);


// 2. map
// -> 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고
//    그 결과 값들을 모아서 새로운 배열로 반환
let  arr2 = [1, 2, 3];

const mapResult1 = arr2.map((item, index, arr)=>{
    return item*2;
});

// console.log(mapResult1);

let names = arr1.map((item)=>{
    return item.name;
});

// console.log(names);


// 3. sort
// 배열을 사전 순으로 정렬하는 메서드
// -> 숫자를 비교하고 싶으면 비교 기준을 정하는 콜백함수를 함께 넘겨줘야한다.

/*
비교 함수가 양수를 반환 
    -> a와 b 중 b의 위치가 a보다 앞이어야 한다는 것을 의미. 
비교 함수가 음수를 반환 
    -> a와 b 중 a의 위치가 b보다 앞이어야 한다는 것을 의미. 
비교 함수가 0을 반환 
    -> 비교 함수가 0을 반환하면, a와 b는 정렬 순서가 동일하다는 것을 의미.
*/

let arr3 = ["b", "a", "c"];
let arr3_1 = [10, 3, 5];

arr3.sort();
arr3_1.sort((a,b)=>{
    // 오름 차순 설정
    if(a > b){
        // b가 a 앞에 와라
        return 1; // b, a배치
    }else if(a < b){
        // a가 b의 앞에 와라
        return -1; // a, b베치
    }else{
        // 두 값의 자리를 바꾸지 마라
        return 0;
    }

        // // 내림 차순 설정
        // if(a > b){
        //     // a가 b 앞에 와라
        //     return -1; // a, b배치
        // }else if(a < b){
        //     // b가 a의 앞에 와라
        //     return 1; // b, a베치
        // }else{
        //     // 두 값의 자리를 바꾸지 마라
        //     return 0;
        // }
});

// console.log(arr3);
// console.log(arr3_1);


// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
// 원본을 건들지 않는다.
let arr5 = ["c", "a", "b"];

const toSorted = arr5.toSorted();
// console.log(arr5);
// console.log(toSorted);


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ["hi", "im", "ohkeonhee"];
// , 같은 구분자를 바꾸고 싶으면 인수로 바꾸고 싶은 걸 넣어준다 공백도 가능
const joined = arr6.join(' ');

console.log(joined);