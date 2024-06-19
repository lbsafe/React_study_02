import useInput from "./../hooks/useInput.jsx";

// 3가지 Hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출이 가능
// 2. 조건부로 호출 될 수 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.



const HookExam =()=>{
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return(
        <div>
            <div><input value={input} onChange={onChange} /></div>
            <div><input value={input2} onChange={onChange2} /></div>
        </div>
    )
}

export default HookExam;