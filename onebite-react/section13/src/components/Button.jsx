import './Button.css';

const Button = ({text, type, onClick})=>{
    return(
        <button className={`btn btn_${type}`} onClick={onClick}>{text}</button>
    );
}

export default Button;