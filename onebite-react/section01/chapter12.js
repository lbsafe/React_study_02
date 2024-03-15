// 1. 함수 표현식

// 함수 선언문 - 호이스팅 가능
function funcA(){
    // console.log("funcA");
}
let varA = funcA;
varA();

// 함수 표현식 - 값으로써 함수를 생성하는 방식
// 호이스팅 불가능
let varB = function(){ // 익명함수
    // console.log("funcB");
}
varB();


// 2. 화살표 함수
let varC = ()=>{
    return 1;
}
console.log(varC());

// 값을 바로 반환하려면 중괄호와 리턴을 생략해도 된다.
// 매개변수가 필요한 경우 괄호 안에 사용한다.
let varD = (value)=> value + 1;
console.log(varD(10));