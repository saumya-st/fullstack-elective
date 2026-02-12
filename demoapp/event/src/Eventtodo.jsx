export default function Eventtdo()
{ function handleclick(){
    alert("You pressed button")
}
    return(
        <>
<h1>Event handling</h1>
<button onClick={handleclick}>Click me</button> //no round brackets needed!

        </>
    );
}