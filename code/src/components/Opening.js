import React from 'react';

const Opening = ({ name, onNameChange, onCounterChange }) => {
  return (
    <div className="container">
      <h1>Karticakes</h1>
      <p> Dear Cakers, you are receiving this survey because of
      your recent purchase at our cake shop.
      </p>
      <p>We actively use feedback from you to constantly improve our service
      and provide you with the best possible products.
      </p>
      <p>So, please feel free to fill in this survey and help Karticakes
      to be your favourite cake shop!
      </p>
      <p>First of all, we would like to know our lovely customer more.
      Please type in your name below!😊

      </p>
      <input
        type="text"
        placeholder="Type your name here..."
        value={name}
        onChange={onNameChange}
        className="name-input" />
      <button type="button" onClick={onCounterChange}>Start Review</button>
    </div>
  )
}
export default Opening;