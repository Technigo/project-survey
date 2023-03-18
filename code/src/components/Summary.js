import React from 'react';

const Summary = ({ name, volume, raceGroup, weapon, quest }) => {
  return (
    <section className="summary">
      <h3>Summary:</h3>
      <div className="summary-text">
        <p>
          Name: <span className="summary-styling">{name}</span>
        </p>
        <p>
          Race: <span className="summary-styling">{raceGroup}</span>
        </p>
        <p>
          Weapon of choise: <span className="summary-styling">{weapon}</span>
        </p>
        <p>
          Quest: <span className="summary-styling">{quest}</span>
        </p>
        <p>
          Level of difficulty: <span className="summary-styling">{volume}</span>
        </p>
      </div>
      <a
        href="https://www.youtube.com/watch?v=CahOLfYxiq0"
        target="_blank"
        rel="noopener noreferrer">
        <button className="summary-button" type="button">
          Start adventure!
        </button>
      </a>
    </section>
  );
};

export default Summary;
