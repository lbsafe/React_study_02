// 1. 대입연산자
let var1 = 1;

// 2. 산술연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = (1 + 2) * 10;
// console.log(num6);

// 3. 복합 대입 연산자
// 산술 + 대입
let num7 = 10;
// num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
// console.log(num7)

// 4. 증감 연산자
// 주의 - 해당 라인 다음 라인부터 적용
// 해당 라인부터 증산을 원하면 ++num8 식으로 전위 연산 시켜준다
let num8 = 10;
++num8;  // 전위 연산
num8++; // 후위 연산

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;
// console.log(or,and,not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 1;
let comp6 = 2 <= 2;