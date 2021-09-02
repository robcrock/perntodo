import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"

const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false)
  const [description, setDescription] = useState(todo.description)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    setDescription(todo.description)
  }

  const updateDescription = async (e) => {
    e.preventDefault()
    console.log(description)
    try {
      const body = { description }
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      )
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal id={`id${todo.todo_id}`} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => updateDescription(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditTodo
