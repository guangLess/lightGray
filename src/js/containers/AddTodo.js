import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux'

//console.log(addTodo)

let AddTodoComponent = ({ dispatch }) => {
  let input
  return (
    <div className="add-todo">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          className="add_todo__input"
          placeholder="write something?"
        />
        <button type="submit" className="add-todo__button">
          🌊
        </button>
      </form>
    </div>
  )
}

let AddTodo = connect()(AddTodoComponent)

export default AddTodo
