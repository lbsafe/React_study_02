import { getEmotionImage } from "../util/get-emotion-image";
import "./DiaryItem.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";

const DiaryItem = ({id, emotionId, createdDate, content})=>{
    const nav = useNavigate();
    const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));

    return(
        <li className="diary_item">
            <div className={`img_box img_box_${emotionId}`} onClick={() => nav(`/diary/${id}`)}>
                <img src={getEmotionImage(emotionId)} alt={emotionItem.emotionName} />
            </div>
            <div className="info_box" onClick={() => nav(`/diary/${id}`)}>
                <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
            </div>
            <div className="btn_box" onClick={() => nav(`/edit/${id}`)}>
                <Button text="수정하기" type={"default"} />
            </div>
        </li>
    );
}

export default DiaryItem;