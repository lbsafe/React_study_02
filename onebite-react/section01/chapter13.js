// 콜백함수란?
// 자신이 아닌 다른 함수에, 인수(인자)로써 전달 된 함수

// ex)
function funcA(value){ // value 에 sub함수가 들어가 있다.
    value(); // 호출
}

function callbak(){
    // console.log("hi");
}

funcA(callbak); // sub -> 콜백함수


// 1. 콜백함수
function main(value){
    // console.log(1);
    // console.log(2);
    // value();
    // 콜백함수는 메인함수가 원하는 시점에 실행시킬 수 있다.
}

function sub(){
    console.log("i am sub");
}

main(sub);

// 함수표현식 화살표함수
main(()=>{
    // console.log("i am sub");
})


// 2. 콜백함수 활용
function repeat(count, callback){
    for(let i = 1; i <= count; i++){
        callback(i);
    }
}

repeat(5, (i)=>{
    console.log(i);
});
repeat(5, (i)=>{
    console.log(i*2);
});
repeat(5, (i)=>{
    console.log(i*3);
});