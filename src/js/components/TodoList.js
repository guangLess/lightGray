import React from 'react'

const Todo = ({onClick, completed, text}) => (
  <li 
    onClick={onClick} 
    className={
      completed
    ? "todo-list__item--completed"
    : "todo-list__item--active"
    }
  >
  {text}
  </li>
)

const TodoList = ({ todos, onTodoClick }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

export default TodoList
