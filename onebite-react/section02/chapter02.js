// 단락 평가
// const returnFalse =() =>{
//     console.log("false 함수");
//     return undefined;
// }

// const returnTrue =() =>{
//     console.log("true 함수");
//     return 10;
// }

// console.log(returnFalse() && returnTrue());


// 단락 평가 활용 사례
const printName = (person)=>{
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name:"오건희"});