import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch  } from 'react-redux'
import {addTask} from '../../JS/Actions'
import  { ToastContainer,toast}  from 'react-toastify'



const AddTask = () => {
  const [text , setText] =useState("")
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault()
    if (text){
      dispatch(addTask({id : Math.random() , text ,isDone : false}))
      toast.success("task added")
    }else {
      toast.error("can not add empty text")
    }
  }
  return (
    <div>
    <Form.Control type="text" placeholder="task" onChange={(e)=> setText(e.target.value)} value ={text} />
    <Button onClick={handleAdd}>Add task</Button>
    <ToastContainer theme="dark" position='top-left'/>
    
    </div>
  )
}

export default AddTask
