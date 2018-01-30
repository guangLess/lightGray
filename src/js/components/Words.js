import React from 'react'

const Word = ({onClick, completed, text}) => (
  <div className="word">
  <p 
    onClick={onClick} 
    className={
      completed
    ? "word-collection__item--completed"
    : "word-collection__item--active"
    }
  >
  {text}
  </p>
  <p> this? </p>
  </div>
)

const Words = ({ words, onWordClick }) => {
    return (
      <div className="word-collection">
        {words.map(word => (
          <Word key={word.id} {...word} onClick={() => onWordClick(word.id)} />
        ))}
      </div>
    );
}

export default Words
