const TodoItem = ({id, isCheck, content, date, onUpdate, onDelete})=>{
    const onChangeCheck =()=>{
        onUpdate(id);
    }

    const onClickDelete =()=>{
        onDelete(id);
    }
    
    return(
        <li>
            <input type="checkbox" checked={isCheck} onChange={onChangeCheck}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </li>
    );
}

export default TodoItem;