// 자료형(data type)

// 원시 타입
/*
    Number
    String
    Boolean
    Null
    Undefined
*/

// 객체 타입
/*
Object
 - Array
 - Function
 - RegexExp
*/


// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대
let nan = NaN; // 연산없음

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 나머지를 구하는 연산은 모듈러 연산이라 한다.


// 2. String Type
let myName = "오건희";
let myLocation = "인천";
let introduce = myName + myLocation; // 덧셈 연산 지원
let introduceText = `${myName}는 
${myLocation}에 거주합니다.`;
/*
    - 템플릿 리터럴 문법 -
    backtick`` 을 이용하면 ${} 을 통해서 변수의 값을 동적으로 문자열에
    포함 시킬 수 있고, 여러줄의 작성이 가능하다.
*/
// console.log(introduceText);


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다.)
let empty = null;


// 5. Undefined Type
let none;
console.log(none);