import { useState } from 'react'
import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions';

const EditTask = ({task}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTask ,setNewTask] = useState("")
  const dispatch = useDispatch()
  const handleEdit = () => {
    dispatch(editTask(task.id , newTask))
    handleClose()
  }

  return (
    <div>
    <Button variant="primary" onClick={handleShow}>Edit</Button>

  <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Form.Control type="text" placeholder={task.text} value={newTask} onChange={(e)=>setNewTask(e.target.value)} />

    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleEdit}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
    </div>
  )
}

export default EditTask
