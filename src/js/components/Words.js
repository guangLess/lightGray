import React from 'react'

const Word = ({onClick, completed, text}) => (
  <div>
  <li 
    onClick={onClick} 
    className={
      completed
    ? "word-collection__item--completed"
    : "word-collection__item--active"
    }
  >
  {text}
  </li>
  <p> this? </p>
  </div>
)

const Words = ({ words, onWordClick }) => {
    return (
      <span className="word-collection">
        {words.map(word => (
          <Word key={word.id} {...word} onClick={() => onWordClick(word.id)} />
        ))}
      </span>
    );
}

export default Words
