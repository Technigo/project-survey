/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
import React from 'react';

const refreshPage = () => {
  window.location.reload(false);
};
const Summary = () => {
  return (
    <>
      <section className="summary-container">
        <div className="story-container">
          {' '}
          <h2 className="summary-title">Mad Lib – Dragon Sneeze</h2>
          <p className="summary-answer">Summary: </p>
        </div>
        <button className="restart-btn" type="button" onClick={refreshPage}>
          Again
        </button>
      </section>
      <div>
        <footer className="footer-container">
          <h4 className="creator">Created & developed by</h4>
          <p className="creator">~ Saralie Bognandi ~</p>
          <h4 className="creator">Written by</h4>
          <p className="creator">~ Linda Edorsson ~</p>
        </footer>
      </div>
    </>
  );
};

export default Summary;
