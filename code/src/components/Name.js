import React from 'react';

import { Button } from './Button';


export const Name = ({setName, name}) => {
  const onNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <label htmlFor="name" className="question-title"><span className="arrow">➛</span> So, let's start with your name</label>
      <input 
        id="name" 
        name="name"
        type="text" 
        className="input-name"
        placeholder="Type your answer here"
        value={name}
        onChange={onNameChange}
        required
      />
      <Button 
        button="CONTINUE" />
    </>

  )
}