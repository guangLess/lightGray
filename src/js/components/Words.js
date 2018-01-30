import React from 'react'

const Word = ({onClick, completed, text}) => (
  <div>
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
  <p> this? </p>
  </div>
)

const Words = ({ words, onWordClick }) => {
    return (
      <ul className="todo-list">
        {words.map(word => (
          <Word key={word.id} {...word} onClick={() => onWordClick(word.id)} />
        ))}
      </ul>
    );
}

export default Words
