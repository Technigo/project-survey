import React from "react";
import 'Components/FormStyle.css'

export const NameQuestion = props => {
  const { name, setName } = props;

  return (
    <section className='question-container'>
      <label>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
    </section>
  );
};
