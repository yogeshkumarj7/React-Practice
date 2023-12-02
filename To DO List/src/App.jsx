import { useState } from "react";

function App() {
  const[tasks,setTasks]=useState([]);
  const[newTask,setNewTask]=useState("");


  // Onchange for the input field
  const changeHandler=(event)=>{
    setNewTask(event.target.value); 
  }

  // Here we added a new task in the list
  const addHandler=()=>{
    if(newTask.trim()!==""){
      setTasks([...tasks,newTask]);
      setNewTask("");
    }
  }
  const removeHandler=(index)=>{
    const updatedTasks=[...tasks];
    updatedTasks.splice(index,1);
    setTasks(updatedTasks);  
  }
  return <div>
   <h1>To-Do-List</h1>
   <input type="text" placeholder="Add task here" onChange={changeHandler} value={newTask}></input>
   <button onClick={addHandler}>Add</button>

<ul>
{
    tasks.map((task,index)=>(
      <li key={index}>
        {task}
        <button onClick={()=>removeHandler(index)}>Remove Task</button>
        </li>
    ))}
</ul>
   
</div>
}

export default App;
