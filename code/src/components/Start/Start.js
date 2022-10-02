import React from 'react';
import styles from './Start.module.css';

const Start = (props) => {
  const handleSubmit = (event) => {
    // event.preventDefault();
    props.setName(event.target.usernameInput.value);
    props.nextPage();
  };

  return (
    <div className="main-container">
      <div className={styles.titleContainer}>
        <h2> Which character from</h2>

        <h1 className={styles.lotr}>Lord of the Rings</h1>
        <h2>are you?</h2>

        <p>First, what is you name?</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            name="usernameInput"
            type="text"
            required
          />

          <button className={styles.startButton} type="submit" id="confirm-btn">
            Start!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Start;
