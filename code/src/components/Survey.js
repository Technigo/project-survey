import React from 'react';

export const Survey = (props) => {
  if (props.id === 'question1') {
    return (
      <div>This is the element for question1</div>
    )
  } else if (props.id === 'question2') {
    return (
      <div>This is the element for question2</div>
    )
  } else if (props.id === 'question3') {
    return (
      <div>This is the element for question3</div>
    )
  } else if (props.id === 'question4') {
    return (
      <div>This is the element for question4</div>
    )
  } else if (props.id === 'question5') {
    return (
      <div>This is the element for question5</div>
    )
  } else if (props.id === 'question6') {
    return (
      <div>This is the element for question6</div>
    )
  } else {
    console.log('props.id')
  }
}