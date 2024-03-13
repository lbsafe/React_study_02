// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

// 숫자와 문자를 더하는 불가능한 연산을 작성 시
// 자바스크립트가 숫자를 문자열로 바꿔서 계산한다
let num = 10;
let str = "20";

const result = num + str;
// console.log(result);


// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해 직접 형 변환을 명시

// ex) 문자열 -> 숫자열
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1);

// parseInt를 이용해서 문자열이 포함된 숫자열을 형 변환 할 수 있다.
// 문자열이 숫자 앞에 있는 경우 변환이 잘 이루어지지 않을 수 있다.
let str2 = "10개";
let strToNum2 = parseInt(str1);
// console.log(10 + strToNum2);

// ex) 숫자열 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
// console.log(numToStr1+"입니다.");