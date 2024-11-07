import React,{useState} from 'react';
import './App.css';

function App() {
const[Name,setName]=useState("")
const[tnc,settnc]=useState(false)
const[Intrest,setIntrest]=useState("")


  function getFormData(e){
    console.log(tnc,Intrest,Name)
    prompt(tnc,Intrest,Name)
    e.preventDefault()
  }
  return (
    <div className="App">
      <h1>Handle Form In React</h1>
      <form onSubmit={getFormData}>
        <input type="text>" placeholder="  Enter Your Name" onChange={(e)=>setName(e.target.value)}></input>  <br></br><br></br>
        <select onChange={(e)=>setIntrest(e.target.value)}>
          <option>Select Options</option>
          <option>India</option>
          <option>U.S.A</option>
          <option>Russia</option>
          <option>China</option>
        </select>  <br></br><br></br>
        <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}></input><span>Accept Terms & Conditions</span><br></br><br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
