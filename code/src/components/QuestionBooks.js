import React from 'react';


const QuestionBooks = () => {
  return (
    <div>
    <label htmlFor="books">How many of Jane's novels have you read?</label>
      <input 
        type="radio" 
        name="radioQuestion" 
        id="none"
      />
      <label htmlFor="none">none</label>
      <input 
        type="radio" 
        name="radioQuestion"
        id="one"
      />
      <label htmlFor="one">1</label>
      <input 
        type="radio"
        name="radioQuestion" 
        id="two"
      />
      <label htmlFor="two">2</label>
      <input 
        type="radio" 
        name="radioQuestion"
        id="three"
      />
      <label htmlFor="three">3</label>
      <input 
        type="radio" 
        name="radioQuestion"
        id="fourmore"
      />
      <label htmlFor="fourmore">4-6</label>
      <input 
        type="radio" 
        name="radioQuestion"
        id="all"
      />
      <label htmlFor="all">all of them</label>
  </div>
  )
};

export default QuestionBooks;