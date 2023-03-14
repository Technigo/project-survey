/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';

export const Answer = (props) => {
  return (
    <>
      {props.questionNumber === 1
     && <div> <input type="text" /> </div>}
      {props.questionNumber === 2
     && <div className="slidecontainer">
       <input type="range" min="1" max="3" value="2" className="slider" id="myRange" />
       <div className="slider-descriptions">
         <p>terrible</p>
         <p>quite okay</p>
         <p>amazing</p>
       </div>
     </div>}
      {props.questionNumber === 3
     && <div>This is the SELECT element for question3</div>}
      {props.questionNumber === 4
     && <div>This is the element for question4</div>}
      {props.questionNumber === 5
     && <div>This is the element - images - for question5</div>}
      {props.questionNumber === 6
     && <div>This is the element -  radio buttons - for question6</div>}
    </>
  )
}