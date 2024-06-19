import './reset.css'
import './App.css'
import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData =[
    { id:0, isCheck: false, content: "React 공부하기", date: new Date().getTime()},
    { id:1, isCheck: false, content: "뿌까 밥주기", date: new Date().getTime()},
    { id:2, isCheck: false, content: "운동하기", date: new Date().getTime()}
];

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3);

    const onCreate =(content)=>{
        const newTodo ={
            id: idRef.current++,
            isCheck:false,
            content: content,
            date: new Date().getTime()
        }
        setTodos([newTodo, ...todos]);
    }

    const onUpdate = (targetId)=>{
        // todos state의 값들 중에
        // targetId와 일치 하는 id를 갖느 투두 아이템의 isCheck 변경

        // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
        setTodos(todos.map((todo)=>todo.id === targetId ? {...todo, isCheck: !todo.isCheck} : todo));
    }

    const onDelete = (targetId)=>{
        // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
        setTodos(todos.filter((todo)=>todo.id !== targetId));
    }

    return (
        <div className='app'>
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App
