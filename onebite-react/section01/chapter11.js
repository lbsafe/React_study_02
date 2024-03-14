// 함수선언
// function greeting(){
//     console.log("안녕하세요");
// }
// greeting();

// width, height = 매개변수

let area1 = getArea(10, 20); // 10, 20 = 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻

function getArea(width, height){

    function another(){ // 중첩함수
        console.log("another");
    }

    another();

    let area = width * height;

    return area;
}