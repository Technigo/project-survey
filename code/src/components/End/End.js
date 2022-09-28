import React from 'react';
import styles from './End.module.css';

const End = (props) => {
  let yourCharacter;
  if (props.question1 === 'Bow and Arrow') {
    yourCharacter = 'Legolas!';
  } else if (props.question1 === 'an axe ofc!') {
    yourCharacter = 'Gimli!';
  } else if (props.question1 === 'Magic') {
    yourCharacter = 'Gandalf!';
  }

  return (
    <div className="main-container">
      <div className={styles.End}>
        <p>You became: {yourCharacter} </p>
        {/* <h1></h1> */}
        <button type="button" onClick={props.nextPage}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default End;
