import React from 'react';

const WelcomePage = ({ onNextChange }) => {
  return (
    <section>
      <form>
        <label htmlFor='welcomeInput'>
          <h2>Welcome page - </h2>
        </label>
        <button onClick={onNextChange}>Start here!</button>
      </form>
    </section>
  );
};

export default WelcomePage;
