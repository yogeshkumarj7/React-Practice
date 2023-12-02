import { useState } from "react";

function App() {
  const[form,setFormData]=useState({
    username:"",
    fullname:"",
    age:"",
  })
  const [display,setDisplay]=useState(false);

  const changeHandler=(event)=>{
    const{name}=event.target;
    setFormData({
      ...form,
      [name]:event.target.value,
    });
  }
  

  const submitHandler=(event)=>{
    event.preventDefault();
    setDisplay(true);
  }
  return(
    <div>
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Username:<input onChange={changeHandler} type="text" placeholder="Username" value={form.username} name="username"></input>
</label>
<br/><br/>
      <label htmlFor="username">Fullname:</label>

      <input onChange={changeHandler} type="text" placeholder="Fullname" value={form.fullname} name="fullname"></input><br/><br/>
      <label htmlFor="fullname">Age:</label><br/><br/>
      <input onChange={changeHandler}  placeholder="Age" value={form.age} name="age"></input><br/><br/>

      <button>Submit</button>
      {
        display &&
        (
          <div>
            <h1>Data successfully sent to database</h1>
            <ul>
              <li>Username:{form.username.toUpperCase()}</li>
              <li>Fullname:{form.fullname.toUpperCase()}</li>
              <li>Age:{form.age}</li>
            </ul>
          </div>
          
        )
      }
    </form>
  </div>)
}

export default App;
