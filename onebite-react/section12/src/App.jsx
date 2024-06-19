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
                <Route path='/diary/:id' element={<Diary />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </>
    )
}

export default App;