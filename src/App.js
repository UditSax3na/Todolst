// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import './Responsive_.css'
import Todos from './components/Todos';

function App() {
  
  if (localStorage.getItem("Todos") === null || localStorage.getItem("Todos") === ""){
    localStorage.setItem("Todos",JSON.stringify([]));
  }
  const [todolst, settodolst] = useState([...JSON.parse(localStorage.getItem("Todos"))]);
  console.log(todolst);
  const [heading, setheading] = useState('');
  const [hover, sethover] = useState(-1);
  const update_ = (ele) =>{
    let basictodo = {
      heading:ele['heading'],
      comp:(ele['comp']===0?1:0)
    }
    let temp = todolst;
    temp = temp.map((ele1)=>{return (ele1===ele?basictodo:ele1)});
    settodolst(temp)
  } 
  const Add_task=()=>{
    let basictodo = {
      heading:heading,
      comp:0
    }
    if (heading===""||heading===" "){
      // 
    }else if(heading==="*dark!"){
      // darkmode
    }
    else{
      settodolst([...todolst,basictodo]);
      document.getElementById("heading").value="";
      setheading("");
    }
  }
  const change_=()=>{
    setheading(document.getElementById("heading").value);
  }
  const delete_=(ele)=>{
    let temp = todolst.filter(e=>e!==ele);
    settodolst(temp);
  }

  // using useEffect for the second time
  useEffect(() => {
    localStorage.setItem("Todos",JSON.stringify(todolst));
  }, [todolst]);
  return (
  <>
    <h1 className="text-center mt-4">Add Task</h1>
  <div className="upperlayer mt-4">
  <div className="input">
    <input type="text" placeholder="Task Name" id="heading" onChange={()=>{change_()}}/>
  </div>
  <button className="btn btn-primary button" onClick={()=>{Add_task()}}>Add</button>
  </div>
  <div className="todolist mt-5">
    {(todolst.length>0?<Todos todo={todolst} settodolst={settodolst} todolst={todolst} sethover={sethover} hover={hover} update_={update_} delete_={delete_}/>:<h6 className='text-center'>No tasks!</h6>)}
  </div>
  </>
      
  );
}

export default App;
