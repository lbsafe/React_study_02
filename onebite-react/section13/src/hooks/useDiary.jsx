import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id)=>{
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    const nav = useNavigate();

    useEffect(()=>{
        const CurrentDiaryItem = data.find((item) => String(item.id) === String(id));

        if(!CurrentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/", {replace:true});
        }

        setCurDiaryItem(CurrentDiaryItem);
    }, [id, data]);

    return curDiaryItem;
}

export default useDiary;