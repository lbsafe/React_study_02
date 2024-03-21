// Promise 란?
// -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// -> Promise는 비동기 작업을 감싸는 객체이다.
/*
    Promise 객체
     - 비동기 작업(ex. setTimeout)

    Promise의 효능
     - 비동기 작업 실행
     - 비동기 작업 상태 관리
     - 비동기 작업 결과 저장
     - 비동기 작업 병렬 실행
     - 비동기 작업 재실행
     - 기타 등등..

    Promise의 3가지 형태
    -> Promise는 비동기 작업을 진행 단계에 따라 3가지 상태로 구분한다.
     - 대기(Pending) 아직 완료되지 않은 상태
     - 성공(Fulfilled) 비동기 작업이 성공적으로 마무리 된 상태
     - 실패(Rejected) 비동기 작업이 실패한 상태

    상태별 표현
     - 해결(resolve) 대기상태가 성공할 때
     - 거부(reject) 대기상태가 실페할 때

    ex) 유튜브
    영상 대기 - 해결 - 성공
    영상 대기 - 거부 - 실패
    
*/

// then 메서드
// -> 그 후에
// resolve의 인수로 전달된 결과값을 매개변수 value로 제공한다.
// catch 메서드
// reject의 인수로 전달된 결과값을 매개변수 error로 제공한다.

/*
    promise chaining 기능

    then은 promise를 반환해서 catch를 위해 따로 promise를 또 쓰지 않고
    이어서 catch를 적어준다.
*/

// promise2
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });



// executer 함수에는 resolve, reject라는 두가지 매개변수가 전달된다.
/*
    둘다 인수로 결과값을 전달 해줄 수 있다.    

    resolve - 성공상태로 바꾸는 함수
     - resolve(결과값);
    reject - 실패상태로 바꾸는 함수
     - reject(결과값);
*/
// const promise = new Promise((resolve, reject)=>{
//     // 비동기 작업 실행하는 함수
//     // -> executer

//     setTimeout(() => {
//         console.log("안녕");
//         resolve("안녕");
//     }, 2000);

//     setTimeout(() => {
//         console.log("안녕");
//         reject("실패한 이유");
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise);
// }, 3000);




const add10 =(num)=>{
    const promise2 = new Promise((resolve, reject)=>{
        // 비동기 작업 실행하는 함수
        // -> executer
    
        setTimeout(() => {    
            if(typeof num === "number"){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다.")
            }
        }, 2000);
    });

    return promise2;
}

add10(0)
    .then((result)=>{
        console.log(result);

        return add10(result);
    })
    .then((result)=>{
        console.log(result);

        return add10(undefined);
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });