// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
// 요소를 추가 후 변환된 배열의 길이를 반환한다
const newLength = arr1.push(4, 5, 6, 7);

// console.log(arr1);
// console.log(newLength);


// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환한다.
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);


// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem);
// console.log(arr3);


// 4. unshift
// 베열의 맨 앞에 새로운 요소를 추가
let arr4 = [1, 2, 3];
// 요소를 추가 후 변환된 배열의 길이를 반환한다
const newLength2 = arr4.unshift(0);

// console.log(newLength2, arr4);

/*
    shift와 unshift는 push와 pop보다는 느리게 동작하다
    -> 첫 시작 index 값을 옮겨주어야 하기 때문이다
    -> 되도록 push나 pop을 통해 해결하는게 좋다
*/

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];

// slice(시작 인덱스값, 잘라낼 인덱스값 + 1);
let sliced = arr5.slice(2, 5);
// 마지막 값까지 잘라낸다면, 시작 index만 적어줘도 된다.
let sliced2 = arr5.slice(2);
// 배열의 뒤에서부터 자르고 싶으면 인수값에 -를 넣어주면 된다.
let sliced3 = arr5.slice(-3);

// console.log(sliced);
// console.log(sliced2);
// console.log(sliced3);
// console.log(arr5);


// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환한다.
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
// console.log(concatedArr);