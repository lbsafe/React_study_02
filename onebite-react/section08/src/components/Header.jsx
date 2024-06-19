import "./Header.css";

const Header =()=>{
    return(
        <header>
            <span>오늘은 🗓️</span>
            <h1>{new Date().toDateString()}</h1>
        </header>
    );
}

export default Header;