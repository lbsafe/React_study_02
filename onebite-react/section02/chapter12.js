// 콜백함수
// 비동기 작업을 하는 함수 결과값을 외부 함수에서 사용하고 싶다면
// 비동기 함수 안에서 콜백함수를 호출하여 사용한다.
// const add =(a, b, callback)=>{
//     setTimeout(() => {
//         const sum = a+b;
//         callback(sum); // 비동기 함수 안에서 콜백함수 호출
//     }, 3000);
// }

// add(1,2, (value)=>{
//     console.log(value);
// });

// add((매개변수)=>{ 화살표함수가 콜백함수이다
//     
// });


// 음식을 주문하는 상황
const orderFood =(callback)=>{
    setTimeout(() => {
        const food = "라면";
        callback(food);
    }, 3000);
}

// 음식을 식히는 함수
// 비동기 작업의 결과를 또다른 비동기 작업의 결과로 전달 하는 것도 가능하다.
const cooldownFood =(food, callback)=>{
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

// 음식을 냉동하기
const freezeFood =(food, callback)=>{
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food)=>{
    console.log(food);

    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood)=>{
            console.log(freezedFood);
        });
    });
});




