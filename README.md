# React 2

<p align="center"><img src="https://user-images.githubusercontent.com/65703793/230308709-b1b3a903-506a-445b-962c-2a8865b7b7fe.png" alt="react" width="300px"></p>

## React 2 공부 목표
>React 기반으로 Javascript와 Node.js를 사용하여 프로젝트를 만들고, 배포해 본다.
***

### React의 기술적인 특징

* **:one:** 컴포넌트를 기반으로 UI를 표현한다.

* **:two:** 화면 업데이트 구현이 쉽다.

* **:three:** 화면 업데이트가 빠르게 처리된다.

***

## React 개발자 도구

**:one:** : :link:[React 개발자 도구][reactdeveloper] 크롬 확장자 추가
    
[reactdeveloper]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko "Go react developer"

**:two:** : 사용 설정
- 설정 > 확장 프로그램 > 확장 프로그램 관리 > 리엑트 개발자 도구 세부정보 > 파일 URL에 대한 액세스 허용, 시크릿 모드에서 허용

**:three:** : 개발자 도구 설정
- 사용할 페이지에서 개발자 도구 Components 탭
- Components 내부 톱니바퀴 Highlight updates when components render. 기능 사용 시 리렌더링 이 발생하는 컴포넌트를 하이라이트로 나타나준다. (불필요한 리렌더링 컴포넌트를 찾는다.)

***

## :zap: Vite 란?

<p align="center"><img src="https://github.com/lbsafe/React_study_02/assets/65703793/c904b0ff-228d-4c11-8bfb-dc3839be06c4" alt="vite" width="150px"></p>

> 차세대 프론트엔드 개발 툴   
기본 설정이 적용 된 React App 생성 가능

***

### Vite 사용 방법

**:one: Vite 패키지 설치하기**

1. Vite 패키지 설치 명령어 실행

    ```js
    npm create vite@latest
    ```
2. 프로젝트 설정
    ```js
    // (프로젝트 이름)
    ? Project name : vite-project

    // (프로젝트 프레임워크)
    ? Select a framework : React

    // (어떤 버전의 리액트 앱을 만들 것인지)
    ? Select a variant : JavaScript
    ```

3. 생성 된 리액트 앱의 package.json 정보 기반으로 라이브러리 설치
    ```js
    npm i // npm install
    ```

**:two: 생성 된 리액트 앱 살펴보기**

* public 폴더

    > jpg, png, svg 등의 이미지 파일이나 폰트, 동영상 같은 정적인 파일 보관

* src - assets

    > public과 동일하게 정적인 파일을 보관한다.

* src - .eslintrc.cjs

    > eslint의 설정 파일, 개발자 사이의 코드스타일을 통일해주는데 도움을 주는 도구

* src - .gitignore

    > 리액트 앱을 github 같은 곳에 업로드할 때 올리면 안되는 파일들을 명시

* src - index.html

    > 리액트 앱의 가장 기본적인 틀 역할하는 파일

* src - vite.config.js

    > vite 도구의 옵션을 설정하는 파일

* src - package.json
    ```js
    {
        "name": "section04", // 프로젝트 명
        "private": true, 
        "version": "0.0.0",
        "type": "module", // ES 모듈 시스템 사용
        "scripts": { // 명령어
            "dev": "vite", // 실행 명령어 npm run dev
            "build": "vite build",
            "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview"
        },
        "dependencies": { // 리액트, 리액트 돔 라이브러리 버전
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
        },
        // devDependencies
        // 오직 개발할 때만 사용되는 라이브러리 (테스트 도구)
        // 실제 배포 시 개발용 라이브러리는 포함되지 않는다.
        "devDependencies": { 
            "@types/react": "^18.2.66",
            "@types/react-dom": "^18.2.22",
            "@vitejs/plugin-react": "^4.2.1",
            "eslint": "^8.57.0",
            "eslint-plugin-react": "^7.34.1",
            "eslint-plugin-react-hooks": "^4.6.0",
            "eslint-plugin-react-refresh": "^0.4.6",
            "vite": "^5.2.0"
        }
    }
    ```

**:three: Vite 커맨드 살펴보기**

- 서버 실행

    ```js
    npm run dev
    ```
    <p align="left"><img src="https://github.com/lbsafe/React_study_02/assets/65703793/0fb38be0-5a9c-4459-b842-9e1881a527c5" alt="vite" width="266px"></p>

- 단축키
    - 단축키 보기

        ```js
        h + enter
        ```
    - 서버 재실행
    
        ```js
        r + enter
        ```
    - 서버 주소보기
    
        ```js
        u + enter
        ```
    - 브라우저에서 자동으로 주소 접근
    
        ```js
        o + enter
        ```
    - 콘솔 클리어
    
        ```js
        c + enter
        ```
    - 리액트 서버 종료
    
        ```js
        q + enter
        ```

**:four: 기본 설정**

1. public 및 src/asssets 안에 이미지 삭제

2. App.jsx 불필요 코드 정리

3. index.css 와 App.css 내부 스타일 코드 삭제

4. main.js의 React.StrictMode 제거
    ```js
    // Before
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )

    // After
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
    )
    ```
5. ESLint 확장자 설치
    > 작성하는 코드를 정적으로 검사해서 오류가 발생할 코드가 있으면 경고를 띄워주는 프로그램   
    (코드 실행 전 미리 오류를 vscode 상에서 확인 가능하다.)

6. .eslintrc.cjs 파일 설정
    ```js
    module.exports = {
        root: true,
        env: { browser: true, es2020: true },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:react/jsx-runtime',
            'plugin:react-hooks/recommended',
        ],
        ignorePatterns: ['dist', '.eslintrc.cjs'],
        parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
        settings: { react: { version: '18.2' } },
        plugins: ['react-refresh'],
        rules: {
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
            ],
            // 코드 상 실제로 사용하지 않는 변수가 존재할 때 오류로 알려주는 옵션
            "no-unused-vars": "off",
            // 리액트를 좀 더 안전하게 사용하게 해주는 옵션 (실습 시에만 꺼둔다.)
            "react/prop-types": "off",
        },
    }
    ```
***

## JSX 문법

> 확장된 자바스크립트 문법 (Javascript Extensions)   
자바스크립트와 html을 혼용하여 사용할 수 있게 해준다.

### JSX 주의사항

**:one:** 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
* 한줄의 코드가 특정한 값으로 표현될 수 있는 값
* 변수의 이름이나 값, 삼항연산자

**:two:** 숫자, 문자열, 배열 값만 렌더링 된다.
* 렌더링 불가능: (논리형, 객체, undefined, null)
* 객체는 키 값을 통해 문자값이나 숫자값으로 렌더링하게 바꿔줘야한다. ex)```{obj.name}```

**:three:** 모든 태그는 닫혀 있어야 한다.
* ex) ```<img /> <input />```

**:four:** 최상위 태그는 반드시 하나여야만 한다.
* 빈 태그로 감싸는 것도 가능 하다 ```<></>```

```js
const Main = ()=>{
    const number = 10;
    const obj = {a:1};

    return(
        <>
            <img/>
            <h2>main</h2>
            <h3>{number % 2 === 0 ? "짝수" : "홀수"}</h3>
            {10}
            {number}
            {[1, 2, 3]}
            {true}
            {undefined}
            {null}
            {obj.a}
        </>
    );
}

export default Main;
```
***

## 이미지 & 폰트 설정하기

### 폰트
* 폰트는 기본적으로 public 폴더에 보관한다.
* index.css 에 폰트 관련 css를 적어준다.
```css
@font-face {
    font-family: "NanumPenScript";
    src: url("/NanumPenScript-Regular.ttf");
}

body *{font-family: "NanumPenScript";}
```
### 이미지
* 이미지는 public, src/assets 폴더에 보관한다.

* **public 폴더**
    - 이미지의 양이 많을 때 사용 (브라우저에 캐싱하기에 메모리의 용량 과부화)
    - URL 경로를 통해서 이미지 사용 ```<img src={"/emotion1.png"} alt="emotion1" />```

* **src/assets 폴더**
    - 소수의 이미지일 경우에만 사용
    - 이미지를 import 해서 사용 ```<img src={emotion1} alt="emotion1" />```
    - Vite 가 내부적으로 이미지 최적화 진행 build 시 데이터 URI(포맷) 발생
        > 데이터 URI는 이미지와 같은 외부 데이터를 문자열 형태로 브라우저의 메모리에 캐싱(저장)하기 위해 사용되는 포맷
<p align="center"><img src="https://github.com/lbsafe/React_study_02/assets/65703793/e76072c2-fd74-43f1-b1c3-48a534d06c6d" alt="react" width="600px">
<img src="https://github.com/lbsafe/React_study_02/assets/65703793/d8f86076-49d2-4f59-a58a-ba2d7daf3dc7" alt="react" width="600px"></p>

***

## Props 활용

> Props는 부모 컴포넌트에서 자식 컴포넌트로 전달이 가능하다.  
반대로 자식 컴포넌트에서 부모 컴포넌트에게 값을 전달하는건 불가능하다.

* 객체의 구조분해 할당을 이용한 매개변수 프로퍼티 설정한다.

* Props는 **defaultProps** 을 통해 기본값을 설정한다. (오류 방지)

* Props를 전달하는 부모 컴포넌트에서의 객체 전달

* Props는 자바스크립트 요소 뿐만이 아니라 HMTL 요소나 React 컴포넌트도 전달한다.   
(자식 요소는 **children** 이라는 props로 전달이 된다.)

    **Button 컴포넌트 (자식)**
    ```js
    const Button = ({ // 구조분해 할당 매개변수 설정
        text,
        color,
        children // 부모 컴포넌트에서 전달 된 HTML요소/React 컴포넌트 props
    })=>{
        return(
            <button style={{color: color}}>{text} - {color.toUpperCase()}{children}</button>
        );
    }

    Button.defaultProps = { // color 프로퍼티의 기본값 설정
        color: "black",
    }

    export default Button;
    ```

    **App 컴포넌트 (부모)**
    ```js
    const App = () => {

        const buttonProps = { // 전달할 props를 객체로 묶어준다.
            text: "메일",
            color: "red",
            a: 1,
            b: 2,
            c: 3
        }
         
        return (
            <>
                <Button {...buttonProps} /> // 스프레드 연산자를 사용해 전달
                <Button text={"카페"}>
                    <Header></Header> // 자식 요소로 React 컴포넌트 전달
                </Button>
                <Button text={"블로그"}>
                    <div>자식요소</div> // 자식 요소로 HTML 전달
                </Button>
            </>
        )
    }
    export default App
    ```
***

## 컴포넌트의 리렌더링

**리액트의 컴포넌트가 리렌더링이 발생하는 상황**

1. 자신의 관리하는 state의 값이 변경 되었을 때

2. 자신이 제공 받는 props의 값이 리렌더링 되었을 때

3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링 된다.

```js
// Before : count 버튼을 눌러도 Bulb 컴포넌트의 console 이 찍힌다.
const Bulb =({light})=>{
    console.log(light);
    return (
        <div>{light === "ON" ? <h1 style={{backgroundColor:"orange"}}>ON</h1> : <h1 style={{backgroundColor:"gray"}}>OFF</h1>}</div>
    );
}

const App = () => {
    // 카운트 스테이트 값이 변동되어 부모 컴포넌트인 App 컴포넌트가 리렌더링 되면서,
    // 관련 없는 자식 컴포넌트 Bulb에도 리렌더링이 발생한다.
    const [count, setCount] = useState(0);
    const [light, setLight] = useState("OFF");

    return (
        <>
            <div>
                <Bulb light={light}/>
                <button onClick={()=>{setLight(light === "ON"? "OFF" : "ON")}}>{light === "ON" ? "끄기":"켜기"}</button>
            </div>
            <div>
                <h1>{count}</h1>
                <button onClick={()=>{setCount(count + 1);}}>+</button>
            </div>
        </>
    )
}
```

> :exclamation:의미 없는 컴포넌트의 리렌더링은 상황이 많아지면 성능이 안 좋아진다.  
이런 경우를 방지하기 위해서 관련 없는 두개의 state를 서로 다른 컴포넌트로 분리해준다.

```js
// After : 서로 다른 컴포넌트의 state값이 변경 되어도 부모 컴포넌트가 리렌더링 되지 않아서 자식 컴포넌트의 불필요한 리렌더링이 발생하지 않는다.
const Bulb =()=>{
    const [light, setLight] = useState("OFF");

    console.log(light);
    return (
        <div>
            <div>{light === "ON" ? <h1 style={{backgroundColor:"orange"}}>ON</h1> : <h1 style={{backgroundColor:"gray"}}>OFF</h1>}</div>
            <button onClick={()=>{setLight(light === "ON"? "OFF" : "ON")}}>{light === "ON" ? "끄기":"켜기"}</button>
        </div>
    );
}

const Counter = ()=>{
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count + 1);}}>+</button>
        </div>
    )
}

const App = () => {
    return (
        <>
            <Bulb/>
            <Counter />
        </>
    )
}
```
***

## 비슷한 state, 이벤트 핸들러 통합하기

> 비슷한 여러개의 state가 있을 때는 하나의 객체 값으로 묶어서 하나의 state로 통합해서 관리하면 유용하다.   
여러 개의 비슷한 이벤트 핸들러는 통합 이벤트 핸들러로 묶어줄 수 있다.
```js
// Before
const Register =()=>{
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e)=>{
        setName(e.target.value);
    }

    const onChangeBirth = (e)=>{
        setBirth(e.target.value);
    }

    const onChangeCountry = (e)=>{
        setCountry(e.target.value);
    }

    const onChangeBio = (e)=>{
        setBio(e.target.value);
    }

    return(
        <div>
            <div><input value={name} onChange={onChangeName} placeholder={"이름"} /></div>
            <div><input value={birth} onChange={onChangeBirth} type='date' /></div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option value="">국적</option>
                    <option value="KR">한국</option>
                    <option value="US">미국</option>
                    <option value="UK">영국</option>
                </select>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio} style={{resize: 'none'}}/>
            </div>
        </div>
    );
}

export default Register;
```

```js
// After
const Register =()=>{
    const [input, setInput] = useState({ // state 객체로 통합
        name : "이름",
        birth : "",
        country : "",
        bio : ""
    });

    const onChange = (e)=>{ // 똑같은 이벤트 통합
        console.log(e.target.name, e.target.value)
        setInput({
            ...input, // 스프레드 연산자로 기존 value 가져오기
            [e.target.name]: e.target.value // 변동 될 value의 값 name 속성을 이용해서 바꿔주기
        })
    }

    return(
        <div>
            <div><input name='name' value={input.name} onChange={onChange} placeholder={"이름"} /></div>
            <div><input name='birth' value={input.birth} onChange={onChange} type='date' /></div>
            <div>
                <select name='country' value={input.country} onChange={onChange}>
                    <option value="">국적</option>
                    <option value="KR">한국</option>
                    <option value="US">미국</option>
                    <option value="UK">영국</option>
                </select>
            </div>
            <div>
                <textarea name='bio' value={input.bio} onChange={onChange} style={{resize: 'none'}}/>
            </div>
        </div>
    );
}

export default Register;
```
***

## React Hooks 란?

>클래스 컴포넌트 기능을 함수 컴포넌트에서도 사용할 수 있게 도와주는 메서드

### React Hooks 특징

**:one:** React Hooks 는 이름 앞에 use 접두사가 붙는다.

**:two:** React Hook 들은 함수 컴포넌트 내부에서만 호출 될 수 있다.

**:three:** React Hook 은 조건부로 호출되어서는 안된다. (조건문, 반복문 내부에서 호출 불가)

**:four:** use 라는 접두사를 통해 나만의 Hook 도 제작 가능하다. (Custom Hook)

***

## Custom Hook 만들기

> 컴포넌트 내부에 반복적으로 사용하는 로직을 분리하여 작업의 효율성을 높힐 수 있다.

**:one:** src/hooks 폴더 생성 및 사용할 hooks 이름 지정

<p align="left"><img src="https://github.com/lbsafe/React_study_02/assets/65703793/b464d244-47fb-48b8-9d63-a11ecbe06c39" alt="hooks" width="233px"></p>


**:two:** useInput.jsx 파일 안에 사용할 함수 작성 (접두사 use 사용 필수)
```js
import { useState } from "react"; // 커스텀 hook 내부에서 사용할 hook 호출

const useInput=()=>{
    const [input,setInput] = useState("");

    const onChange= (e)=>{
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;
```
**:three:** useInput 호출 및 사용 (여러번의 반복 사용 가능)
```js
// 커스텀 hook을 사용하는 컴포넌트 파일 기준으로 경로에 맞춘다.
// useState 는 커스텀 hook 내부에서 호출하여 필요하지 않다면 따로 호출하지 않는다.
import useInput from "./../hooks/useInput.jsx";

const HookExam =()=>{
    // 기존 hook처럼 배열의 구조분해 할당으로 함수명을 자유롭게 설정
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return(
        <div>
            <div><input value={input} onChange={onChange} /></div>
            <div><input value={input2} onChange={onChange2} /></div>
        </div>
    )
}
```
***

## useEffect 로 라이프사이클 제어

**:one:** 마운트 : 탄생
```js
// 첫 한번 실행
useEffect(()=>{
    console.log("마운트");
},[]);
```

**:two:** 업데이트 : 변화, 리렌더링
> 마운트 시점을 제외하고 컴포넌트가 업데이트 될 때만 콜백함수를 실행하고 싶다면,   
App 컴포넌트가 마운트가 되었는지 체크하는 변수 useRef 를 이용해서 만들어준다.
```js
// 초기값으로 컴포넌트가 마운트 되지 않음을 뜻하는 false
const isMount = useRef(false);

useEffect(()=>{
    if(!isMount.current){ // 컴포넌트가 마운트 되지 않은 상황
        isMount.current = true; // 마운트 완료

        return // 종료
    }
    // 위 조건문에서 return으로 인해 첫 마운트 시 수행되지 않음
    console.log("업데이트");
});

```
**:three:** 언마운트 : 죽음
> useEffect의 콜백 함수가 반환하는 함수 => 클린업, 정리함수   
정리함수는 useEffect가 끝날 때 (언마운트 될 때) 실행된다.
```js
const Even =()=>{
    useEffect(()=>{
        // 클린업, 정리함수
        return () =>{
            console.log("unmount");
        };
    }, []); // 빈 배열로 인해 useEffect가 마운트 될 때 실행

    return <div>짝수입니다.</div>
}

<section>
    <Viewer count = {count}/>
    {count % 2 === 0? <Even /> : null}
</section>
```
***

## useReducer

> useState 와 동일하게 컴포넌트 내부에 새로운 State를 생성하는 React Hook이다.   

### useReducer 특징
 1. **:exclamation:useState와의 차이점**: 상태를 관리하는 코드를 컴포넌트 외부로 분리할 수 있다.
 2. 모든 useState는 useReducer로 동일하게 만들 수 있다.   
 3. useReducer 를 이용하여 컴포넌트 내부의 코드가 길어지는 것을 방지하고,  
편리하게 유지보수 등의 관리를 할 수 있다.

```js
import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
// 매개변수 reducer =(현재의 state, 요청의 내용이 담긴 액션 객체)
const reducer =(state, action)=>{
    console.log(state, action);

    switch(action.type){ // 일반적으로 switch문을 사용한다.
        case "INCREASE" :
            return state + action.data;
        
        case "DECREASE" :
            return state - action.data;

        default: return state; // 기본 값
    }

    // if(action.type === "INCREASE"){
    //     return state + action.data
    // }else if(action.type === "DECREASE"){
    //     return state - action.data;
    // }
}

const Exam = ()=>{
    // dispatch : 발송하다, 급송하다
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    // -> 상태 변화를 요청하기만 하는 함수

    // useReducer(변환기 역할의 함수, 초기값);
    const [state, dispatch] = useReducer(reducer, 0);
    
    const onClickPlus = ()=>{
        // 인수: 상태가 어떻게 변화되길 원하는지
        // -> 액션 객체
        dispatch({
            // 타입은 문자열로 연관성 있는 이름을 지어준다.
            type : "INCREASE", // 더하기
            data : 1 // 변화될 값
        });
    }

    const onClickMinus = ()=>{
        dispatch({
            type : "DECREASE", // 빼기
            data : 1
        })
    }

    return <div>
        <h1 style={{fontSize:"50px", marginBottom:"30px"}}>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}

export default Exam;
```

## React 최적화
**:pushpin:최적화 시점**
> 하나의 프로젝트를 거의 완성한 시점에서 최적화를 진행한다.   
기능 구현 -> 최적화 순으로 작업한다.

**:warning:최적화 주의점**
>간단한 컴포넌트의 경우 최적화를 하는 과정에서 더 많은 연산이 필요할 수 있기에 최적화를 해주지 않는 것이 오히려 더 효율적일 수 있다. 그렇기에 무거운 연산이나, 많은 함수를 포함하는 컴포넌트만 최적화 해주는 것이 효율적이다.

### 1. useMemo

> "메모이제이션(기억해두기)" 방식을 기반으로 불 필요한 연산을 다시 수행하지 않도록, 리액트 앱을 최적화 해주는 React Hook  
:arrow_forward: 똑같은 연산을 실행할 때, 연산한 최초의 결과값을 저장했다가 필요할 때마다 다시 연산하는 것이 아닌 값만 가져오는 방식

**useMemo의 기본 구조**
* 첫번째 인자 콜백함수, 두번째 인자 배열
* deps의 포함 된 값이 변경 되었을 때에만 콜백함수 다시 실행
* 해당 콜백 함수가 반환하는 값을 useMemo 가 반환
```js
const a = useMemo(()=>{
    // 콜백함수 / 메모이제이션 하고 싶은 연산
    return 1;
}, []);
// 의존성배열 : deps
```

**기존의 방식**
> 실제로 todos 리스트의 아무런 변화가 없어도 검색을 할때마다 호출이 일어난다.
```js
// Before
const getAnalyzedData = ()=>{
    console.log("getAnalyzedData 호출!"); // 검색 시에도 계속 호출
    const totalCount = todos.length;
    const checkedCount = todos.filter((todo)=>todo.isCheck).length;
    const notCheckedCount = totalCount - checkedCount;

    return {
        totalCount,
        checkedCount,
        notCheckedCount
    }
}

const {totalCount, checkedCount, notCheckedCount} = getAnalyzedData();

return(
    <section className="list_section">
        <h2>Todo List 🌱</h2>
        <div>
            <div>total: {totalCount}</div>
            <div>checked: {checkedCount}</div>
            <div>notChecked: {notCheckedCount}</div>
        </div>
        <input type="text" placeholder="검색어를 입력하세요" className="search" value={search} onChange={onChangeSearch}/>
        <ul>
            {fillteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
            })}
        </ul>
    </section>
);
```

**useMemo 최적화**
> todos 리스트의 변화가 있을 때만 호출이 일어난다.
```js
// After
// 객체의 구조 분해할당을 통한 리턴으로 값을 받아 사용한다.
const {totalCount, checkedCount, notCheckedCount} = useMemo(()=>{
    console.log("getAnalyzedData 호출!"); // 리스트에 변화가 일어날 때만 호출
    const totalCount = todos.length;
    const checkedCount = todos.filter((todo)=>todo.isCheck).length;
    const notCheckedCount = totalCount - checkedCount;
    
    return {
        totalCount,
        checkedCount,
        notCheckedCount
    }
}, [todos]); // 최초 실행 후 todos의 값이 변경 될 때만 실행

return(
    <section className="list_section">
        <h2>Todo List 🌱</h2>
        <div>
            <div>total: {totalCount}</div>
            <div>checked: {checkedCount}</div>
            <div>notChecked: {notCheckedCount}</div>
        </div>
        <input type="text" placeholder="검색어를 입력하세요" className="search" value={search} onChange={onChangeSearch}/>
        <ul>
            {fillteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
            })}
        </ul>
    </section>
);
```
***

### 2. React.memo

> 리액트의 내장 함수로 인수로는 리액트의 컴포넌트를 받는다.  
해당 컴포넌트에 최적화 기능을 추가해서 결과값으로 반환해준다.

**React.memo의 특징**
* 최적화 기능이 추가 된 함수는 props 기준으로 메모이제이션 한다.
* 부모 컴포넌트가 리렌더링 되더라도 자신이 받는 props 가 바뀌지 않으면 리렌더링이 발생하지 않는다.
* 객체 타입의 값을 props 로 전달 받는 컴포넌트는 memo 함수가 기본적으로 얕은 비교를 하기에 비교 함수에 커스텀이 필요하다.

**React.memo의 기본 구조**
```js
const MemoizedComponent = memo(Component);
// MemoizedComponent -> 반환값 : 최적화 된 컴포넌트
// Component -> 인수
```

**기존의 방식**
> 부모 컴포넌트가 리렌더링이 일어나면, 전달 받는 props의 값이 변하지 않아도 자식 요소인 Header도 불필요한 리렌더링이 발생한다.

```js
import "./Header.css";

const Header =()=>{
    return(
        <header>
            <span>오늘은 🗓️</span>
            <h1>{new Date().toDateString()}</h1>
        </header>
    );
}

export default Header;
```

**memo 최적화**
> 부모 컴포넌트의 리렌더링이 일어나도 전달 받는 props 에 변화가 없어서 자식 요소인 Header 컴포넌트는 리렌더링이 일어나지 않는다.

```js
import { memo } from "react";
import "./Header.css";

const Header =()=>{
    return(
        <header>
            <span>오늘은 🗓️</span>
            <h1>{new Date().toDateString()}</h1>
        </header>
    );
}

// const memoizedHeader = memo(Header);

// export default memoizedHeader;

// 단축하여 사용하기
export default memo(Header);
```

**memo 커스텀 비교 함수**
> 객체로 props를 전달 받는 경우 얕은 비교로 인해서 올바른 비교가 불가능 하기에,  
메모 함수 안에 두번째 인수로 콜백 함수를 추가로 전달해 최적화 기능을 커스텀 해준다.

```js
import { memo } from "react";

// 객체로 받은 Props : id, isCheck, content, date
const TodoItem = ({id, isCheck, content, date, onUpdate, onDelete})=>{
    const onChangeCheck =()=>{
        onUpdate(id);
    }

    const onClickDelete =()=>{
        onDelete(id);
    }
    
    return(
        <li>
            <input type="checkbox" checked={isCheck} onChange={onChangeCheck}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </li>
    );
}

// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps)=>{
    // 과거의 Props : prevProps
    // 현재의 Props : nextProps
    // 반환 값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
    // True -> Props 바뀌지 않음 -> 리렌더링 a
    // False -> Props 바뀜 -> 리렌더링 O
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isCheck !== nextProps.isCheck) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;

    return true;
});
```

:heavy_check_mark: 고차 컴포넌트 (HOC)
> 컴포넌트를 인수로 받아서 해당 컴포넌트의 최적화나 메모이제이션 같은 추가적인 기능을
덧붙여,  
새로운 컴포넌트로 반환해주는 memo와 같은 메서드
***

### 3. useCallback

> 불 필요한 함수 재생성 방지하기

**useCallback의 기본 구조**
```js
const callbackFuc = useCallback(()=>{

},[]);
// 첫번째 인자 콜백함수 - 그대로 반환해서 전달해준다.
// 두번째 인자 deps - 컴포넌트가 최초 실행 후 함수 재생성 방지
```

```js
// Before
const onUpdate = (targetId)=>{
    dispatch({
        type : "UPDATE",
        targetId : targetId
    });
};
```

```js
// After
const onUpdate = useCallback((targetId)=>{
    dispatch({
        type : "UPDATE",
        targetId : targetId
    });
}, []);

// 기존의 메모 함수를 따로 커스텀하지 않아도 최적화 된다. (메모 함수 사용 필수)
export default memo(TodoItem);
```
***

## Context

### Context 특징

> **Context는 데이터 보관소(객체)** 로 컴포넌트 간의 데이터를 전달하는 또 다른 방법이다.  
Context 를 사용하면 기존의 Props 가 가진 단점을 해결할 수 있다.

**Props 단점 - Props Drilling**
>Props는 부모에서 자식으로만 데이터를 전달 할 수 있다. 때문에 Props를 전달할 때 하위 자식 컴포넌트의 구조가 많아질 수록 관리하기 힘들어 진다.  
ex) Props의 이름 변경, 개발 시 타이핑 량의 증가 등

* Props 방식 - Props Drilling 발생
    ```html
    <부 모>
       ↓    (Props1) 전달
    <자식1>
       ↓    (Props1) 전달
    <자식2>
       ↓    (Props1) 전달
    <자식3>
    ```

* Context 방식
    ```html
    <부 모>  -(Props1)->  {Context}
       ↓                      ↓
    <자식1>                  
       ↓                      ↓
    <자식2>                  
       ↓                      ↓ 
    <자식3> <-(Props1)- - - - -
    ```

### Context 사용법

**:one:** createContext 메서드 호출
```js
import { createContext } from 'react';
```

**:two:** 컴포넌트 외부에 컨텍스트 생성
 * 데이터를 하위 컴포넌트에 공급해주는 용도이기에 리렌더링 시 컨텍스트 실행 방지
 * export 를 통해 데이터를 사용할 곳에서 불러올 수 있게 해준다.
```js
export const TodoContext = createContext();

function App() {
 ...
}

export default App;
```

**:three:** Context의 프로퍼티인 Provider 컴포넌트를 통해 Props를 전달 받을 컴포넌트를 감싸준다.

* Provider는 Context가 공급할 데이터를 설정하거나 데이터를 공급 받을 컴포넌트를 설정한다.
* 공급할 데이터는 Provider 컴포넌트에 value 라는 Props로 전달한다.

```js
// Before
return (
    <div className='app'>
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
)
```
```js
// After
return (
    <div className='app'>
        <Header />
        <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
            <Editor/>
            <List/>
        </TodoContext.Provider>
    </div>
)
```

**:four:** Context로 부터 데이터를 꺼낼 쓸 컴포넌트에 불러와 준다.
```js
import "./Editor.css";
import { useRef, useReducer, useContext } from "react"; // useContext 불러온다
import { TodoContext } from "../App"; // TodoContext를 App.jsx로 부터 불러온다.

const Editor = ()=>{
    // 인수로 데이터를 불러오고자 하는 컨텍스트 선언 후
    // 구조분해 할당을 이용해 사용할 함수를 불러와 준다.
    const {onCreate} = useContext(TodoContext);
    const [content, dispatch] = useReducer(reducer, "");
    const contentRef = useRef(null);

    ... 

    const onsubmit =()=>{
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);

        dispatch({
            type : "clearContent",
            data : ""
        });
    }

    return(
        <div className="editor">
            <input type="text" placeholder="새로운 Todo..." value={content} onChange={onChangeContent} onKeyDown={onKeyDown} ref={contentRef}/>
            <button onClick={onsubmit}>추가</button>
        </div>
    );
}

export default Editor;
```

### Context 의 최적화 문제

> Provider 컴포넌트도 엄연히 React의 컴포넌트이기 때문에 App 컴포넌트로 부터 전달 받는 value Props 에 제공 받는 Props가 바뀌게 되면 리렌더링이 발생하게 된다.  
:arrow_forward: 새로운 리스트를 추가하거나 수정하거나 삭제 했을 때 todos state가 바뀌게 되면서 객체를 다시 생성해서 넘겨 주기 때문이다.

```js
function App() {
    // todos state의 변동
    const [todos, dispatch] = useReducer(reducer, mockData);

    ...

    // 부모로 부터 전달 받는 todos state가 변동 되어 value 객체 자체가 다시 생성 되면,
    // 부모 컴포넌트인 Provider가 리렌더링이 발생하면서,
    // 하위 컴포넌트에서 context로 받는 객체도 다시 생성 되어 리렌더링이 일어난다.
    // 때문에 memo를 적용해도 props가 변동된 것과 동일하게 리렌더링이 발생한다.
    return (
        <div className='app'>
            <Header />
                                   value 객체의 재생성 -> Provider 리렌더링
            <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}}>
                <Editor/>  -> 전달 받은 context 객체 재생성 -> 리렌더링
                <List/>    -> 전달 받은 context 객체 재생성 -> 리렌더링
            </TodoContext.Provider>
        </div>
    )
}
```

### Context 분리하기 (최적화 문제 해결)

>변경 되는 값과 변경되지 않는 값을 분리해준다.
* todos 처럼 state 임으로 변경 될 수 있는 값
* 변경되지 않는 함수
```html
                    TodoContext
                 ↙             ↘
    TodoStateContext           TodoDispatchContext
   (변경 될 수 있는 값)          (변경 되지 않는 값)
        state 등                바뀌지 않는 함수 등
```

**:one:** 용도에 따라서 분리하기
```js
// 분리해서 선언
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content)=>{
        ...
    }, []);

    const onUpdate = useCallback((targetId)=>{
        ...
    }, []);

    const onDelete = useCallback((targetId)=>{
        ...
    }, []);

    // App 컴포넌트에 todos state가 변경되어 리렌더링이 발생할 경우에도
    // useMemo를 통해 최초 실행 후 객채가 재생성 되지 않도록 해준다.
    const memoizedDistpatch = useMemo(()=>{
        return {onCreate, onUpdate, onDelete};
    }, []);

    return (
        <div className='app'>
            <Header />
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDistpatch}>
                    <Editor />
                    <List />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>            
        </div>
    );
}

export default App;
```

**:two:** 각각의 Context 를 불러올 자식 컴포넌트들에서 호출하기
```js
// TodoDispatchContext
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App"; // TodoDispatchContext 호출

const TodoItem = ({id, isCheck, content, date})=>{
    // 객채의 구조 분해할당
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    ...
    
    return(
        <li>
            <input type="checkbox" checked={isCheck} onChange={onChangeCheck}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </li>
    );
}

export default memo(TodoItem);
```
```js
// TodoStateContext
import { useReducer, useMemo, useContext } from "react";
import { TodoStateContext } from "../App"; // TodoStateContext 호출

const List =()=>{
    const [search, dispatch] = useReducer(reducer, "");
    // 객체가 아닌 state 배열이기에 구조분해 할당을 사용하지 않는다.
    const todos = useContext(TodoStateContext);

    ...

    return(
        <section className="list_section">
            <h2>Todo List 🌱</h2>
            <div>
                <div>total: {totalCount}</div>
                <div>checked: {checkedCount}</div>
                <div>notChecked: {notCheckedCount}</div>
            </div>
            <input type="text" placeholder="검색어를 입력하세요" className="search" value={search} onChange={onChangeSearch}/>
            <ul>
                {fillteredTodos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} />
                })}
            </ul>
        </section>
    );
}

export default List;
```
***

## React Router

### React Router 사용 방법

**:one: React Router 라이브러리 기본 설정**

1. React Router 라이브러리 설치 명령어 실행

    ```js
    npm i react-router-dom
    ```
2. main.jsx 설정 하기
    * BrowserRouter 컴포넌트 import 한다.
    * ```<APP />``` 컴포넌트를 ```<BrowserRouter>``` 컴포넌트로 감싸준다.
    * BrowserRouter는 Context 객체의 Proider 컴포넌트를 통해 App 컴포넌트와 모든 자손 컴포넌트에게 공급 된다. (개발자 도구 확인)
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import './index.css';
    import { BrowserRouter } from 'react-router-dom';

    ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    ```
**:two: 페이지 나누기**

1. Routes, Route 컴포넌트를 임폴트 해준다.
2. src/pages 디렉토리 생성 후 페이지 역할을 할 컴포넌트를 생성해준다.
3. ```<Routes>``` 를 최상위 태그로 ```<Route>``` 를 통해 path와 element Props를 설정해준다.

    ```js
    import './reset.css';
    import './App.css';
    import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home';
    import Diary from './pages/Diary';
    import New from './pages/New';
    import Notfound from './pages/Notfound';

    function App() {
        return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/new' element={<New />} />
                <Route path='/diary' element={<Diary />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        )
    }

    export default App;
    ```
**:three: Router 라이브러리 주의 사항**

1. **Routes 특징**
    * Routes는 마치 switch case처럼 현재 브라우저에 알맞는 path Prop을 갖는 Route 컴포넌트를 찾는다.
    * Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능하다.
    * Routes 컴포넌트 밖에 요소는 모든 페이지에 동일하게 출력 된다.  
    (모든 페이지에 공통으로 사용할 요소가 아니라면 Routes 외부에 배치하지 않는다.)

2. **Route 특징**
    * Route Props
        * path : 경로
        * element : 해당 경로에서 렌더링 하고자 하는 컴포넌트
    * path Props
        * path='/' : index 기본 메인 페이지
        * path='*' : wildcard(switch case default) 위에 있는 경로에 일치하지    않았을 때의 경우, 주로 Notfound 즉 페이지를 찾지 못할 경우에 쓰인다.
***

### React Router 페이지 이동하기

**:one:** Link 컴포넌트
> 리액트 앱 내부 링크 이동할 때 사용한다. (클라이언트 사이드 렌더링 방식 제공)
```js
<Link to={"/"}>Home</Link>
```

**:two:** useNavigate Hook
> 특정 조건에 따라 함수를 사용해서 링크를 이동 시켜야 하는 경우 사용한다.  
ex) 로그인, 회원가입 등 (클라이언트 사이드 렌더링 방식)
```js
const nav = useNavigate(); // nav에 useNavigate 함수 저장

const onClickBtn = ()=>{ // 이벤트 핸들러 함수
    nav('/new'); // nav 함수 호출 후 인수로는 이동하고자 하는 경로 지정
};
```

**활용 예시**
```js
import './reset.css';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

function App() {
    const nav = useNavigate();

    const onClickBtn = ()=>{
        nav('/new');
    };

    return(
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>New</Link>
                <Link to={"/diary"}>Diary</Link>
            </div>
            <button onClick={onClickBtn}>New 페이지 이동</button>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/new' element={<New />} />
                <Route path='/diary' element={<Diary />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </>
    )
}

export default App;
```
***

### React Router 동적 경로 이동하기

**:question: 동적 경로란**
> 쇼핑몰의 상품 등이 경로가 되는 동적인 데이터를 포함하고 있는 경로  
ex) ~/product/01, ~/product/02, ~/search?q=검색어

* URL 파라미터 방식

    > 아이템의 id 등의 변경 되지 않는 값을 주소로 명시하기 위해 사용 
    ```html
    / 뒤에 아이템의 id를 명시  
    ~/product/아이디1, ~/product/아이디2
    ```
* Query String 방식

    > 검색어 등의 자주 변경 되는 값을 주소로 명시하기 위해 사용
    ```html
    ? 뒤에 변수명과 값 명시  
    ~/search?q=검색어
    ```
#### 동적 경로 사용법 (URL 파라미터)

**:one:** Route 경로에 URL 파라미터 사용 명시
```js
// 경로 뒤에 /:id 등의 값 추가 
<Route path='/diary/:id' element={<Diary />} />
```

**:two:** URL 파라미터를 사용할 컴포넌트에서 useParams Hook 사용

1. useParams 임폴트
2. const params = useParams(); 변수에 담아서 호출

```js
import { useParams } from "react-router-dom";

const Diary = ()=>{
    const params = useParams();

    console.log(params);
    return(
        <div>{params.id}번 일기입니다.</div>
    );
}

export default Diary;
```

#### 동적 경로 사용법 (Query String)

**:one:** Query String을 사용할 컴포넌트에서 useSearchParams Hook 사용

**:two:** useState와 같이 함수 사용

1. params : Query String 으로 전달한 변수와 값
2. setParams : 특정 Query String 의 값을 변경할 수 있는 함수, 값을 수정할 수 있다.
3. params.get("value") 통해 Query String의 값을 불러온다.

```js
import { useSearchParams } from "react-router-dom";

const Home = ()=>{
    const [params, setParams] = useSearchParams();

    console.log(params.get("value"));

    return(
        <div>홈</div>
    );
}

export default Home;
```
***


## Vercel 배포하기

**:one:** : :link:[Vercel][vercel] 홈페이지 가입하기
    
[vercel]: https://vercel.com/ "Go vercel"

**:two:** 파일 build 하기
```js
npm run build
```

**:three:** vercel 설치
```js
npm install -g vercel
```

**:four:** vercel 로그인하기 (가입한 계정 선택)
```js
vercel login
```

**:five:** vercel 배포하기
```js
npx vercel
```

**:six:** 수정하기
```js
npm run build // 수정 후 다시 build
    ↓
vercel // 배포하기
    ↓
vercel --prod // 배포 확정 확인
```

### **:warning:** 커맨드 오류가 생길 경우

**:one:** windows powershell을 검색하여 관리자로 실행해준다

**:two:** get-ExecutionPolicy로 현재 권한상태를 확인한다
```js
get-ExecutionPolicy
```

**:three:** 권한 상태를 "RemoteSigned"으로 변경한다
```js
Set-ExecutionPolicy RemoteSigned
```

**:four:** get-ExecutionPolicy로 권한이 잘 변경되었는지 확인한다

```js
// 설정
Restricted : default 설정 값으로, 스크립트 파일을 실행할 수 없다.
AllSigned : 신뢰할 수 있는(서명된) 스크립트 파일만 실행할 수 있다.
RemoteSigned : 로컬에서 본인이 생성한 스크립트와, 신뢰할 수 있는(서명된) 스크립트 파일 실행할 수 있다.
Unrestricted : 모든 스크립트 실행가능하다.
ByPass : 경고/차단 없이 모든 것을 실행 가능 하도록 한다.
Undefined : 권한을 설정하지 않았다.
```
***

## 프로젝트 완성

:link:[감정 일기장][diary] 확인하기
    
[diary]: https://emotion-diary-fawn.vercel.app/ "Go diary"

**:star: 간단 후기**
> React 기반으로 Javascript와 Node.js를 사용하여 프로젝트를 만들고, localStorage를 이용해서 사이트에 각각의 일기 데이터를 저장하고 불러오게 만들었다. 프로젝트 완성 후에는 Vercel 을 사용해서 배포하면서 bulid 하는 방법을 배웠다.
***