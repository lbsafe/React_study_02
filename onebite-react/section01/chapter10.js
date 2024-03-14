// for 문
/*
for(초기식; 조건식; 증감식;){
    console.log("반복");
}
*/
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);

    if(i >= 5){
        break;
    }
}