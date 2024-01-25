import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
  return (
    <>
      {props.todo.map((ele)=>{
        return <Todo todo={ele} settodolst={props.settodolst} todolst={props.todolst} hover={props.hover} sethover={props.sethover} update_={props.update_} delete_={props.delete_}/>
      })}
    </>
  )
}
