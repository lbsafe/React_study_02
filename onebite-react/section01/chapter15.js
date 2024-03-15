// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자 밥법
let obj2 = {}; // 객체 리터럴 방법


// 2. 객체 프로퍼티 (객체 속성)
// 기본구조 key: value
let person = {
    name: "오건희",
    age: 27,
    hobby: "영화",
    job: "publisher",
    extra:{},
    "like dog": true
};


// 3. 객체 프로퍼티를 다루는 방법

// 3.1 특정 프로퍼티 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];

// 괄호 표기법의 동적 활용
let property = "hobby";
let hobby = person[property];


// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE Dev";
person["favoritFood"] = "팝콘";


// 3.3 프로퍼티를 수정하는 방법
person.job = "개발자";
person["favoritFood"] = "육포";


// 3.4 프로퍼티를 삭제하는 방법
delete person.favoritFood;
delete person["hobby"];


// 3.5 프로퍼티의 존재 유무를 확인 하는 방법 (in 연산자)
// 기본구조 - propery in 객체
let result1 = "name" in person;
let result2 = "hobby" in person;

console.log(result1, result2);