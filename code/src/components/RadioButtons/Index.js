import React from 'react';
import styles from './RadioButtons.module.css';

const RadioButtons = (props) => {
  console.log(props.question2);
  console.log('props', props);

  return (
    <form className={styles.radioButtons}>
      {props.options.map((option) => (
        <label className={styles.label} key={option} htmlFor={option}>
          <input
            id={option}
            name={option}
            type="radio"
            value={option}
            onChange={(event) => props.onChange(event.target.value)}
            checked={props.value === option}
          />
          {option}
        </label>
      ))}
    </form>
  );
};

export default RadioButtons;
