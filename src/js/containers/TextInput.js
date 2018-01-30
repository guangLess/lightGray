import React from 'react'
import { connect } from 'react-redux'
import { write } from '../redux'

let AddTextComp = ({ dispatch }) => {
  let input
  return (
    <div className="text">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(write(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          className="text-input"
          placeholder="writing..."
        />
        <button type="submit" className="text-input__button">
          🌊
        </button>
      </form>
    </div>
  )
}

let TextInput = connect()(AddTextComp)
export default TextInput
