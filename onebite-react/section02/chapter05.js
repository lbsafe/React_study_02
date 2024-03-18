// 원시타입
/*
    Number, String, Boolean 등,
    값 자체로써 변수에 저장되고 복사된다.
    -> 불변값이다 (메모리값 수정 x)
*/

// 객체 타입
/*
    Object, Array, Function 등,
    참조값을 통해 변수 값에 저장되고 복사된다.
    -> 가변값이다 (메모리값 수정 O)

    주의사항
    1. 의도치 않게 값이 수정될 수 있다.

        (얕은 복사 - 객체의 참조값을 복사, 위험함)
        let o1 = {name : 오건희}
        let o2 = o1;
        o2.name = "오거니";

        원본값인 o1도 값이 변동된다.

        1-1.
        위 문제를 방지하기 위해서는 새로운 객체를 생성하고
        그 내부에 스프레드 연산자 등을 이용해
        새로운 객체를 생성해 내부 프로퍼티를 복사하는 방식을
        사용한다.

        (깊은 복사 - 새로운 객체 생성 후 프로퍼티만 복사, 안전함)
        let o1 = {name : 오건희}
        let o2 = {...o1};

    2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.

        let o1 = {name : "오건희"};
        let o2 = o1;
        let o3 = {...o1};

        console.log(o1 === o2); // true
        console.log(o1 === o3); // false

        참조값이 아닌 프로퍼티를 기준으로 비교하려면 JSON.stringify() 를 사용한다.
        JSON.stringify() - 자바스크립트 내장함수 객체를 문자열로 변환하는 기능

        console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true

        o1 === 02 // 얕은 비교
        JSON.stringify(o1) === JSON.stringify(o2) // 깊은 비교

    3. 배열과 함수도 사실 객체이다.
    
    객체(Object) 
        - 함수(Function) // 추가 된 기능 : 호출, 선언, ...
        - 배열(Array) // 추가 된 기능 : 순처 저장, 순회, ...
*/