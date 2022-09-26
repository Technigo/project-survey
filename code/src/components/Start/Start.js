import React from 'react';
import styles from './Start.module.css';

const Start = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setName(event.target.name.value);
    props.nextPage();
  };

  return (
    <div className="main-container">
      <div className={styles.Start}>
        <h1> Which character from Disney are you?</h1>
        <p>Find out in this survey!</p>

        <form onSubmit={handleSubmit}>
          <h2>Your name is: {props.name} </h2>
          <input name="name" type="text" />
          <button type="submit" id="confirm-btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Start;
