import "./List.css";
import TodoItem from "./TodoItem";
import { useReducer} from "react";

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

    return(
        <section className="list_section">
            <h2>Todo List 🌱</h2>
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