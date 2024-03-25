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