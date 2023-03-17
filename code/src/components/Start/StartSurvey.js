import React from 'react';
import NextButton from 'components/Buttons/NextButton';
import styles from './StartSurvey.module.css';

const Start = (props) => {
  const handleSubmit = (event) => {
    props.setName(event.target.usernameInput.value);
    props.nextPage();
  };

  return (
    <div className="survey-wrapper">
      <div className={styles.titleContainer}>
        <h2> What personality type do you have?</h2>
        <p>First, what is your name?</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            name="usernameInput"
            type="text"
            required />

          <button className={styles.startButton} type="submit" id="confirm-btn">
                        Let`&apos;`s find out!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Start;