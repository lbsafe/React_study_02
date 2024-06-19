import "./Editor.css";
import { useRef, useReducer, useContext } from "react";
import { TodoDispatchContext } from "../App";

const reducer =(state, action)=>{
    switch (action.type) {
        case "changeContent" :
            return action.data;

        case "clearContent" :
            return action.data;
    
        default: return state;
    }
}

const Editor = ()=>{
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, dispatch] = useReducer(reducer, "");
    const contentRef = useRef(null);

    const onChangeContent = (e)=>{
        dispatch({
            type : "changeContent",
            data : e.target.value
        });
    }

    const onKeyDown =(e)=>{
        if(e.keyCode === 13){
            onsubmit();
        }
    }

    const onsubmit =()=>{
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);

        dispatch({
            type : "clearContent",
            data : ""
        });
    }

    return(
        <div className="editor">
            <input type="text" placeholder="새로운 Todo..." value={content} onChange={onChangeContent} onKeyDown={onKeyDown} ref={contentRef}/>
            <button onClick={onsubmit}>추가</button>
        </div>
    );
}

export default Editor;