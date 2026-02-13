export default function Eventtodo() {
  function handleclick(name) {
    alert(`Button pressed by ${name}`);
  }
  function handleSubmit(e)
  {
e.preventDefault();
const input = e.target.task;
const inputValue =input.trim();
if (taskValue==="")
{
    alert("Task can not be empty");
    return;
}
const li = document.createElement("li");
li.innerHTML=`<span>${taskValue}</span>
<button class="deleteBtn">Delete</button>`;
document.getElementById("taskList").appendChild(li);


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
