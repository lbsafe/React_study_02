import "./List.css";
import TodoItem from "./TodoItem";
import { useReducer, useMemo } from "react";

const reducer = (state, action)=>{
    switch(action.type){
        case "changeSearch" :
            return action.data;

        default : return state;
    }
}

const List =({todos, onUpdate, onDelete})=>{
    const [search, dispatch] = useReducer(reducer, "");

    const onChangeSearch =(e)=>{
        dispatch({
            type : "changeSearch",
            data : e.target.value
        });
    }

    const getFillteredData =()=>{
        if(search === ""){
            return todos;
        }

        return todos.filter((todo)=>{
            return todo.content.toLowerCase().includes(search.trim().toLowerCase());
        });
    }

    const fillteredTodos = getFillteredData();

    // const getAnalyzedData = ()=>{
    //     console.log("getAnalyzedData 호출!");
    //     const totalCount = todos.length;
    //     const checkedCount = todos.filter((todo)=>todo.isCheck).length;
    //     const notCheckedCount = totalCount - checkedCount;

    //     return {
    //         totalCount,
    //         checkedCount,
    //         notCheckedCount
    //     }
    // }

    const {totalCount, checkedCount, notCheckedCount} = useMemo(()=>{
        // console.log("getAnalyzedData 호출!");
        const totalCount = todos.length;
        const checkedCount = todos.filter((todo)=>todo.isCheck).length;
        const notCheckedCount = totalCount - checkedCount;

        return {
            totalCount,
            checkedCount,
            notCheckedCount
        }
    }, [todos]);
    // 의존성 배열 : deps

    // const {totalCount, checkedCount, notCheckedCount} = getAnalyzedData();

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
}

export default List;