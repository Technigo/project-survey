import React from 'react';

export const Survey = (props) => {
  if (props.id === 'question1') {
    return (
      <div><input type="text" /></div>
    )
  } else if (props.id === 'question2') {
    return (
      <div className="slidecontainer"><input type="range" min="1" max="3" value="2" className="slider" id="myRange" />
        <div className="slider-descriptions">
          <p>terrible</p>
          <p>quite okay</p>
          <p>amazing</p>
        </div>
      </div>
    )
  } else if (props.id === 'question3') {
    return (
      <div>This is the SELECT element for question3</div>
    )
  } else if (props.id === 'question4') {
    return (
      <div>This is the element for question4</div>
    )
  } else if (props.id === 'question5') {
    return (
      <div>This is the element - images - for question5</div>
    )
  } else if (props.id === 'question6') {
    return (
      <div>This is the element -  radio buttons - for question6</div>
    )
  } else {
    console.log('props.id')
  }
}