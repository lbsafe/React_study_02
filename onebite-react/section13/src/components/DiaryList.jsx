import './DiaryList.css';
import Button from "./Button";
import DiaryItem from './DiaryItem';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const DiaryList = ({data})=>{
    const [sortType, setSortType] = useState("latest");
    const nav = useNavigate();

    const onChangeSortType = (e)=>{
        setSortType(e.target.value);
    }

    const getSortedDate = ()=>{
        return data.toSorted((a,b)=>{
            if(sortType === "oldest"){
                return Number(a.createdDate) - Number(b.createdDate);
            }else{
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    }

    const sortedData = getSortedDate();

    return(
        <div className="diary_list">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"Positive"} onClick={()=>nav(`/new`)} />
            </div>
            {sortedData.length === 0 ? (
                <div className="no_diary">새 일기를 추가해 보세요!</div>
            ) : (
                <ul className="list_wrap">
                    {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
                </ul>
            )}
        </div>
    )
}

export default DiaryList;