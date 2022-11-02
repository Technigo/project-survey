import React from 'react';

export const Buttons = ({ section, setSection }) => {
  const nextSection = (event) => {
    event.preventDefault();
    setSection(section + 1);
  };

  const previousSection = (event) => {
    event.preventDefault();
    setSection(section - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSection(5);
  };
  return (
    <div className="btn-container">
      {section <= 0 && (
        <button className="button-start" onClick={nextSection} type="button">
          Start survey
        </button>
      )}

      {section >= 2 && section <= 4 && (
        <button className="button" onClick={previousSection} type="button">
          Previous Question
        </button>
      )}

      {section >= 1 && section <= 3 && (
        <button className="button" onClick={nextSection} type="button">
          Next Question
        </button>
      )}

      {section === 4 && (
        <button className="button" onClick={handleSubmit} type="submit">
          Summary
        </button>
      )}

      {section === 5 && (
        <button onClick={() => setSection(0)} className="button" type="button">
          Restart
        </button>
      )}
    </div>
  );
};
