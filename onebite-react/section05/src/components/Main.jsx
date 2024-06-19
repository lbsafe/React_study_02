import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (한줄로서 값으로 표현되는 값)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (논리형, undefined, null, 객체 렌더링 불가능 객체는 키 값을 통해 문자값이나 숫자값으로 렌더링하게 바꿔줘야한다.)
// 3. 모든 태그는 닫혀 있어야 한다. (img나 input등 태그를 닫아주어야 한다.)
// 4. 최상위 태그는 반드시 하나여야만 한다. (빈 태그도 가능)
const Main = ()=>{

    const user = {
        name: "오건희",
        isLogin: false,
    };

    if(user.isLogin){
        // 돔 요소에 스타일 속성을 작성할때는 카멜케이스로 작성한다.
        return <div style={{backgroundColor:"red",borderBottom:"5px solid blue"}}>로그아웃</div>
    }else{
        return <div className="login">로그인</div>
    }

    // return(
    //     <>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
}

export default Main;