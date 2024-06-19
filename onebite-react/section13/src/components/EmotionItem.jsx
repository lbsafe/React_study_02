import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({emotionId, emotionName, isSelected, onClick})=>{
    return(
        <li className={`emotion_item ${isSelected ? `emotionitem_on_${emotionId}` : ""}`} onClick={onClick} >
            <img src={getEmotionImage(emotionId)} alt={emotionName} className="emotion_img" />
            <p className="emotion_name">{emotionName}</p>
        </li>
    )
}

export default EmotionItem;