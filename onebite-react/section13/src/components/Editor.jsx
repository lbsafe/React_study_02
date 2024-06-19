import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({onSubmit, initData})=>{
    const [input, setInput] =  useState({
        createdDate : new Date(),
        emotionId : 3,
        content : ""
    });

    const nav = useNavigate();

    useEffect(()=>{
        if(initData){
            setInput({
                ...initData,
                createdDate : new Date(Number(initData.createdDate))
            });
        }
    },[initData]);
    const onChangeInput = useCallback((e)=>{
        let name = e.target.name;
        let value = e.target.value;

        if(name === "createdDate"){
            value = new Date(value);
        }

        setInput((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
        // setInput(prev =>({
        //     ...prev,
        //     [name] : value
        // }))
    },[])

    const onClickSubmitBtn = ()=>{
        onSubmit(input);
    }

    return(
        <div className="editor">
            <section className="date_section">
                <h2>오늘의 날짜</h2>
                <label>
                    <input name="createdDate" value={getStringedDate(input.createdDate)} type="date" onChange={onChangeInput} />
                </label>
            </section>
            <section className="emotion_section">
                <h2>오늘의 감정</h2>
                <ul className="emotion_list_wrap">
                    {emotionList.map((item) => 
                        <EmotionItem 
                            key={item.emotionId} 
                            {...item} 
                            isSelected={item.emotionId === input.emotionId} 
                            onClick={
                                ()=>onChangeInput({
                                    target : {
                                        name : "emotionId",
                                        value : item.emotionId
                                    }
                                }
                            )} 
                        />)}
                </ul>
            </section>
            <section className="content_section">
                <h2>오늘의 일기</h2>
                <textarea name="content" value={input.content} onChange={onChangeInput} placeholder="오늘은 어땠나요?" />
            </section>
            <section className="btn_section">
                <Button text={"취소하기"} type={"default"} onClick={() => nav(-1)} />
                <Button text={"작성완료"} type={"Positive"} onClick={onClickSubmitBtn} />
            </section>
        </div>
    )
}

export default Editor;