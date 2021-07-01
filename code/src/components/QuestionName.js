import React from 'react';
import TextField from '@material-ui/core/TextField';

const QuestionName = () => {
  return (
    <div>
        <label htmlFor="name">What is your name?</label>
        <TextField 
        required
        id="name"
        type="text"
        placeholder="Type your name here..."
        />
      </div>
  )
};

export default QuestionName;