// 1. 상수 객체
const animal ={
    type: "강아지",
    name: "뿌까",
    color: "black"
}

// 상수에 다른 객체를 생성해서 할당은 불가능
// animal = {a: 1};

// 기존 객체에 새로운 프로퍼티를 추가, 수정, 삭제 가능
animal.age = 2; // 추가
animal.color = "tan"; // 수정
delete animal.type; // 삭제

// console.log(animal);

/*
    상수에 새로운 값을 할당하는건 불가능하지만
    저장 되어있는 객체 값의 프로퍼티를 수정하는건 가능하다.
*/


// 2. 메서드
// -> 값이 함수인 프로퍼티를 말한다.

const person ={
    name: "오건희", // 객체 정보
    // 메서드
    sayHi: ()=>{ // 객체 동작 정의
        console.log("hi");
    }
}

person.sayHi();
person["sayHi"]();