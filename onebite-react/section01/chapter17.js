// 배열
// -> 객체와 동일하게 여러개의 값을 담는 자료형
// -> 객체와 차이는 배열은 값을 순차적으로 담는다.


// 1. 배열 생성
let arrA = new Array() // 배열 생성자 방법
let arrB = []; // 배열 리터럴 방법

let arrC = [1, 2, 3, true, "hello", null, undefined, ()=>{}, {}, []];
// console.log(arrC);


// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = 10;

console.log(arrC);