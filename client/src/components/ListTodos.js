import React, { useEffect, useState } from "react"

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos")
      const jsonData = await response.json()
      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  const deleteTodo = async (todo_id) => {
    try {
      await fetch(`http://localhost:5000/todos/${todo_id}`, {
        method: "DELETE",
      })
      setTodos(todos.filter((todo) => todo.todo_id !== todo_id))
    } catch (error) {
      console.error(error.message)
    }
  }

  // const onSubmitForm = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const body = { description }
  //     const response = await fetch("http://localhost:5000/todos", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     })

  //     window.location = "/"
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos
