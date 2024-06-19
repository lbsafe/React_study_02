import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    
    const onClickBtn = (value)=>{
        setCount(count + value);
    }

    return (
        <div className='app'>
            <h1>Simple Counter</h1>
            <section>
                <Viewer count = {count}/>
            </section>
            <section>
                <Controller onClickBtn = {onClickBtn}/>
            </section>
        </div>
    )
}

export default App;
