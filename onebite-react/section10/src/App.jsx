import './reset.css'
import './App.css'
import { useState, useRef, useReducer, useCallback } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData =[
    { id:0, isCheck: false, content: "React 공부하기", date: new Date().getTime()},
    { id:1, isCheck: false, content: "뿌까 밥주기", date: new Date().getTime()},
    { id:2, isCheck: false, content: "운동하기", date: new Date().getTime()}
];

const reducer = (state, action)=>{
    switch(action.type){
        case "CREATE" :
            return [action.data, ...state];
        
        case "UPDATE" :
            return state.map((item)=>item.id === action.targetId ? {...item, isCheck : !item.isCheck} : item);

        case "DELETE" :
            return state.filter((item)=>item.id !== action.targetId);

        default : return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((content)=>{
        dispatch({
            type : "CREATE",
            data : {
                id : idRef.current++,
                isCheck : false,
                content : content,
                date : new Date().getTime()
            }
        });
    }, []);

    const onUpdate = useCallback((targetId)=>{
        dispatch({
            type : "UPDATE",
            targetId : targetId
        });
    }, []);

    const onDelete = useCallback((targetId)=>{
        dispatch({
            type : "DELETE",
            targetId : targetId
        });
    }, []);

    return (
        <div className='app'>
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    )
}

export default App
