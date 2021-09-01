import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description)
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }

  const updateDescription = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch(
        `http://localhost:500/toods/${todo.todo_id}`,
        {
          metHod: "PUT",
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
      <Button
        type="Button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
        onClick={() => handleModal()}
      >
        Edit
      </Button>

      <Modal
        show={modal}
        onHide={() => handleModal()}
        onClick={() => handleModal()}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Hi, React modal is here.</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModal()}>Close Modal</Button>
        </Modal.Footer>
      </Modal>

      {/* <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <Button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </Button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <Button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </Button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default EditTodo
