import { memo } from "react";

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

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps)=>{
//     // 반환 값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // True -> Props 바뀌지 않음 -> 리렌더링 a
//     // False -> Props 바뀜 -> 리렌더링 O
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isCheck !== nextProps.isCheck) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });
export default memo(TodoItem);