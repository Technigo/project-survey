import React from 'react';
import styles from './HeroSection.module.css';
import booksImage from '../../images/books.jpg';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <h1>Hello friend!</h1>
        <p>
          Welcome to The Book Club, <br />
          where we <span className={styles.italic}>recommend</span>,
          <span className={styles.semiBold}> discuss </span> and{' '}
          <span className={styles.underLine}> LOVE </span>
          books together!
        </p>
        <button className="start-btn" type="button">
          Lets go!
        </button>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroImage}>
          <img src={booksImage} alt="illustation of books" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
