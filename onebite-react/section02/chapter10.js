// 1. Date 객체 생성 방법
// 현재 시간
let date1 = new Date(); // 생성자
let date2 = new Date("1998/04/26/10:10:10"); // - . / 로 날짜 구분
// console.log(date2);


// 2. 타임 스탬프
// 특정 시간이 "1998.04.26 00시 00분 00초"로 부터 몇 ms가 지났는지 의미하는 숫자값
// -> 기준 시각 - 협정 세계시 UTC
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1,date4);


// 3. 시간 요소들을 추출하는 방법
// 년도
let year = date1.getFullYear();
// 월 자바스크립트에서 월은 0부터 시작한다.
let month = date1.getMonth() + 1;
// 일
let date = date1.getDate();
// 시간
let hour = date1.getHours();
// 분
let minute = date1.getMinutes();
// 초
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);


// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월 자바스크립트의 월은 0부터 시작하니까
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(30);
date1.setSeconds(59);

// console.log(date1);


// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());