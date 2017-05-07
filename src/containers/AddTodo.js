import React from 'react'
import * as ReactRedux from 'react-redux'
import * as Actions from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(Actions.addTodo(input.value))
        input.value = ''
      }} >
        <input ref={node => {
          input = node
        }} />
        <button type="submit" >
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = ReactRedux.connect()(AddTodo)

export default AddTodo
