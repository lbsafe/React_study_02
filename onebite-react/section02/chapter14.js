// async
// -> 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 변환해주는 키워드

/*
    객체를 그대로 반환하는 함수가 아닌 이 객체를 결과 값으로 갖는
    새로운 프로미스를 반환하는 함수로 변환된다.
*/

// const getData = async()=>{
//     return{
//         name : "오건희",
//         id : "lbsafe"
//     };
// }
// console.log(getData());


const getData = async()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res({
                name : "오건희",
                id : "lbsafe"
            });
        }, 1500);
    });
}

// await
// -> async 함수 내부에서만 사용 가능한 키워드
// -> 비동기 함수가 다 처리되길 기다리는 역할

// Before
// const printData =()=>{
//     getData().then((result)=>{
//         console.log(result);
//     });
// }
// printData();

// After
const printData2 = async()=>{
    // 반환하는 프로미스가 종료되길 기다림
    const data = await getData();
    console.log(data);
}
printData2();








