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