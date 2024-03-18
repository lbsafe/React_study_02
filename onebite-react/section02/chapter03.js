// 구조분해할당
// -> 배열이나 객체에 저장된 값들을 분해해서 각각 다른 변수에 할당하는 것

// 1. 배열의 구조분해 할당
let arr = [1, 2, 3];

// Before
// let one = arr[0];

// After
let [one, two, three, four=4] = arr;
// console.log(one, two, three, four);


// 2. 객체의 구조분해 할당
let person ={
    name : "오건희",
    age : 27,
    hobby : "영화감상",
}

// Before
// let name = person.name;

// After
// -> age : myAge 처럼 할당받는 변수의 이름을 변경할 수 있다.
// -> 객체의 구조분해 할당은 함수에 여러개의 인수를 전달할 때 자주 사용한다.
let {name, age : myAge, hobby, extra="hello"} = person;
// console.log(name, myAge, hobby ,extra)


// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수 받는 방법
const func = ({name, age, hobby, extra})=>{
    console.log(name, age, hobby, extra);

}

func(person);