import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({onCreate})=>{
    const [content, setContent] = useState("");
    const contentRef = useRef(null);

    const onChangeContent = (e)=>{
        setContent(e.target.value);
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
        setContent("");
    }

    return(
        <div className="editor">
            <input type="text" placeholder="새로운 Todo..." value={content} onChange={onChangeContent} onKeyDown={onKeyDown} ref={contentRef}/>
            <button onClick={onsubmit}>추가</button>
        </div>
    );
}

export default Editor;