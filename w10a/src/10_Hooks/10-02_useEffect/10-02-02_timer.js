import { useEffect , useState} from "react"

const timeout = 1000;

const Timer=()=>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(() => {
            setCount(()=>count+1);

        }, timeout);
    }, [count]);

    return <h1>타이머 렌더링: 
        <span style={{color:'red'}}>{count}</span>초(times)</h1>

}

export default Timer;