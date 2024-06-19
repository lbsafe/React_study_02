import { useSearchParams } from "react-router-dom";

const Home = ()=>{
    const [params, setParams] = useSearchParams();

    console.log(params.get("value"));

    return(
        <div>홈</div>
    );
}

export default Home;