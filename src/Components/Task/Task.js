import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions'
import "./Task.css"
import EditTask from '../EditTask/EditTask'

const Task = ({task}) => {
  const dispatch =useDispatch()
  return (
    <div style={{display : 'flex',justifyContent : 'space-around',marginTop :'3%'}}>
     <p className={task.isDone ? "done" : null}>{task.text}</p> 
      <EditTask/>
      <Button onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>
      <Button onClick={()=>dispatch(doneTask(task.id))}  >{task.isDone ? "unDone" : "Done"}</Button>
    </div>
  )
}

export default Task
