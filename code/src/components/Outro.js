/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
import React from 'react';

const Outro = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <>
      <section className="outro-container">
        {' '}
        <h2 className="outro-title">Här ska vi ha en slutsida med resultat</h2>
        <p className="outro-answer">Display answer from question one</p>
        <p className="outro-answer">Display answer from question two</p>
        <p className="outro-answer">Display answer from question three</p>
        <button className="restart-btn" type="button" onClick={refreshPage}>
          Again
        </button>
      </section>
      <div>
        <footer className="footer-container">
          <h4 className="creator">Created & developed by</h4>
          <p className="creator">~ Saralie Bognandi ~</p>
        </footer>
      </div>
    </>
  );
};

export default Outro;
