import './reset.css'
import './App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
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

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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
    )
}

export default App;
