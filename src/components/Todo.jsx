import React from 'react'
import './stylings/todostyling.css'
import Cross from './icons/Cross'
import Check from './icons/Check'

export default function Todo(props) {
  return (
    <div className='chold mx-2 mb-4 '>
      <button className='btn btn-outline-success selection-done' onClick={()=>{props.update_(props.todo)}} ><Check className='done'/></button>

      <span className={props.todo['comp']===0?'todo':"todo active"} >{props.todo['heading']}</span>

      <button className='btn btn-outline-success selection-close' onClick={()=>{props.delete_(props.todo)}}><Cross className='close'/></button>

    </div>
  )
}
// 
