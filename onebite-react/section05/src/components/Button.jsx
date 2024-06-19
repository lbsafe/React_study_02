const Button = ({
    text,
    color,
    children
})=>{
    // 이벤트 객체
    const onClickButton =(e)=>{
        console.log(e);
        console.log(text);
    }

    return(
        <button
        style={{color: color}} 
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        >{text} - {color.toUpperCase()}{children}</button>
    );
}

Button.defaultProps = {
    color: "black",
}

export default Button;