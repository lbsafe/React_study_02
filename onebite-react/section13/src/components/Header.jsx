import "./Header.css";

const Header = ({title, leftChild, rightChild})=>{
    return(
        <header className="header">
            <div className="header_left">{leftChild}</div>
            <div className="header_center"><h1>{title}</h1></div>
            <div className="header_right">{rightChild}</div>    
        </header>
    );
}

export default Header;