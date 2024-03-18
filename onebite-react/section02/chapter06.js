// 1. 배열 순회
let arr = [1, 2, 3];


// 1-1. 배열의 인덱스 이용
for(let i=0; i < arr.length; i++){
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];

for(let i=0; i < arr2.length; i++){
    // console.log(arr2[i]);
}


// 1-2. for of 반복문
// of 뒤의 배열을 하나씩 꺼내서 item에 저장
for(let item of arr){
    // console.log(item);
}


// 2. 객체 순회
let person ={
    name: "오건희",
    age: 27,
    hobby: "영화보기"
};

// 2-1. Object.keys 사용
// -> 객체의 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let i=0; i < keys.length; i++){
    // console.log(keys[i], person[keys[i]]);
}

for(let key of keys){
    const value = person[key];
    // console.log(key, value);
}

// 2-2. Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for(let value of values){
    // console.log(value);
}

// 2-3. for in
// -> in 뒤에 person 객체의 프로퍼티의 key를 key 라는 변수에 할당한다
for(let key in person){
    const value = person[key];
    console.log(key, value);
}