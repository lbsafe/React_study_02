import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1. 마운트 : 탄생
    useEffect(()=>{
        console.log("마운트");
    },[]);
    // 2. 업데이트 : 변화, 리렌더링
    useEffect(()=>{
        if(!isMount.current){
            isMount.current = true;
            return
        }
        console.log("업데이트");
    });
    // 3. 언마운트 : 죽음
    
    const onClickBtn = (value)=>{
        setCount(count + value);
    }

    return (
        <div className='app'>
            <h1>Simple Counter</h1>
            <section>
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
            </section>
            <section>
                <Viewer count = {count}/>
                {count % 2 === 0? <Even /> : null}
            </section>
            <section>
                <Controller onClickBtn = {onClickBtn}/>
            </section>
        </div>
    )
}

export default App;
