import React, { useState } from 'react';
import styles from './Start.module.css';

const Start = () => {
  const [name, setName] = useState('Jane Doe');

  const ageGroups = ['Younger than 15', '15-25', '26-35', '36-45', '+45'];
  const [ageGroup, getAgeGroup] = useState('');

  return (
    <section className={styles.startSection}>
      <div>
        <h2>
          Lets get started!
          <br />
          May we have your name and age please?
        </h2>
      </div>
      <div className={styles.name}>
        <p>Sure! My name is:</p>
        <form>
          <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
        </form>
      </div>
      <div className={styles.age}>
        <p>And I am:</p>
        <form>
          {ageGroups.map((group) => (
            <lable key={group}>
              <input
                className={styles.inputAge}
                type="radio"
                value={group}
                onChange={(event) => getAgeGroup(event.target.value)}
                checked={ageGroup === group} />
              {group}
            </lable>
          ))}
        </form>
      </div>
      <button className="start-btn" type="button">
        Submit
      </button>
    </section>
  );
};

export default Start;
