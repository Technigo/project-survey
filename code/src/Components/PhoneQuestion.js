import React from "react";
import 'Components/FormStyle.css'

export const PhoneQuestion = props => {
  const { phoneNumber, setPhoneNumber } = props;

  return (
    <section className='question-container'>
      <label>
        <p>Phone number</p>
        <input
          type="text"
          value={phoneNumber}
          onChange={event => setPhoneNumber(event.target.value)}
        />
      </label>
    </section>
  );
};
