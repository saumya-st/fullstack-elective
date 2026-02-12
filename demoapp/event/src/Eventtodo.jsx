export default function Eventtdo() {
  function handleclick(name) {
    alert(`Button pressed by ${name}`);
  }
  function handleSubmit(e)
  {
e.preventDefault();
const input = e.target.value;
const inputValue =input.trim();
if (inputValue==="")
{
    alert("Task can not be empty");
    return;
}
const li = document.createElement("li");
<li.contains()

  }

  return (
    <>
      <h1>to do app</h1>
      <button onClick={() => handleclick('Kiet')}>
        Click me
      </button>
      <form onSubmit={handleSubmit}>
        <input type = "text" name = "task" placeholder="Add your task here"/>
        <input type="submit">Add task</input>
        <form>
            <ul id="tasklist" onClick={handleClickList}>


            </ul>
        </form>


      </form>
    </>
  );
}
