import React, { useState } from 'react';

export const Thanks = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.whenNext(0);
  }
  return(
    <>
    <h2>
      Hej jag är sida 4 
    </h2>
    <button type="button" className="thanks-button"  onClick={handleClick}>THANK YOU</button>
    </>
  )
}