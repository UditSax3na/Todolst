// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  const [todolst, settodolst] = useState([{heading:'do it',comp:0},{heading:'temp',comp:0}]);
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
    settodolst([...todolst,basictodo]);
    document.getElementById("heading").value="";
  }
  const change_=()=>{
    setheading(document.getElementById("heading").value);
  }
  const delete_=(ele)=>{
    let temp = todolst.filter(e=>e!==ele);
    settodolst(temp);
  }
  return (
  <>
    <h1 className="text-center mt-4">Add Task</h1>
  <div className="upperlayer mt-4 mx-4">
  <div className="input mx-3">
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
