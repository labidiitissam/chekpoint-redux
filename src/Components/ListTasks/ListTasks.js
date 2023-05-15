import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
import { Button } from 'react-bootstrap'


const ListTasks = () => {

    const listTasks = useSelector(state => state.listReducers.listTasks)
    const [status,setStatus] = useState("ALL")
  return (
    <div>
      

    <Button onClick={()=>setStatus("ALL")} >ALL</Button>
    <Button onClick={()=>setStatus("DONE") } >DONE</Button>
    <Button onClick={()=>setStatus("UNDONE")}>UNDONE</Button>
    
    {status === "DONE"?
    listTasks.filter((el)=> el.isDone===true)
    .map((el)=><Task task={el} key={el.id}/>) :
    status === "UNDONE" ? 
    
    listTasks.filter((el)=> el.isDone===false)
    .map((el)=><Task task={el} key={el.id}/>) :
    
    listTasks.map(el => <Task task={el} key={el.id}/>)}


    </div>
  )
}

export default ListTasks









