import { useState } from "react";
import { useEffect } from "react";
export default function Counter(){
    const [count,setCount] = useState(0);
    
    function handleIncrement(){
        setCount(count=>count+1);
        // count++;
        console.log(count);
    }
    function handleDecrement(){
        setCount(count=>count-1);
        // count--;
        console.log(count);
    }
    useEffect(()=>{console.log("Welcome")},[])
    useEffect(()=>{console.log("Count updated")},[count])
    return(
        <>
        <h1>Counter app</h1>
        <h3>Count = {count}</h3>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> -</button>
        </>
    );
}