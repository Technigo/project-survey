import React from 'react'

export const BackFront = ({ backFront, setBackFront }) => {
  const handleBackFrontChange = (event) => {
    setBackFront(event.target.value);
  };

  return (
    <fieldset className="back-front-container">
      <h2 className="quest-heading">What tech would you like your future hire to be most comfortable with?</h2>
      <input
        type="checkbox"
        id="javascript"
        name="javascript"
        value="javascript" />
    </fieldset>
  )
}
