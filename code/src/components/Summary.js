import React from 'react';

const Summary = ({
  nameInput,
  selectInput,
  radioInput
}) => {

  const changeBackgroundColor = () => {
    let color;
    if (selectInput === "Orange") {
      document.body.style.backgroundColor = "#e57151"
    } else if (selectInput === "Brown") {
        color = "#a5895d"
    } else if (selectInput === "Yellow") {
        color = '#f09937';
    }
    return color;
};

  return (

    <div>
      <div className="Greeting">{radioInput}, {nameInput}!</div>
    </div>
  )

};

export default Summary;