import { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./index.css";
function App() {
  const[val,setValue]=useState(10);

  const setValuer=(event)=>{
    setValue(Number(event.target.value));
  }
  return(
    <div className="App">
  {/* Creating the progress Bar */}
    <h1>Progress Bar</h1>
    <ProgressBar width={val}/>
    <form>
    <label htmlFor="inputProgress">Input Percentage:</label>
    <input type="number" id="inputProgress" value={val} onChange={setValuer}/>
    </form>
   
</div>
  )

}

export default App;  
