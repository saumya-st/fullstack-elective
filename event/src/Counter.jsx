export default function Counter(){
    var count = 0;
    function handleIncrement(){
        count++;
        console.log(count);
    }
    function handleDecrement(){
        count--;
        console.log(count);
    }
    return(
        <>
        <h1>Counter app</h1>
        <h3>Count = {count}</h3>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> -</button>
        </>
    );
}