import { memo } from "react";
import "./Header.css";

const Header =()=>{
    return(
        <header>
            <span>오늘은 🗓️</span>
            <h1>{new Date().toDateString()}</h1>
        </header>
    );
}

// const memoizedHeader = memo(Header);

// export default memoizedHeader;

// 단축 사용
export default memo(Header);