import React from 'react';

const Startpage = ({ startCount }) => {
  return (
    <>
      <h2>Hello dear user!</h2>
      <p>Click the button below to start the survey.</p>
      <button
        type="button"
        onClick={startCount}>
        Start quiz
      </button>
    </>
  )
};

export default Startpage;