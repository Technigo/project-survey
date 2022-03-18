import React from "react";

const Buttons = ({ section, setSection }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSection(5);
  };

  const nextSection = (e) => {
    e.preventDefault();
    setSection(section + 1);
  };

  const previousSection = (e) => {
    e.preventDefault();
    setSection(section - 1);
  };

  return (
    <div className="btn-container">
      {section >= 2 && section <= 4 && (
        <button className="button" onClick={previousSection}>
          Previous Question
        </button>
      )}

      {section < 4 && (
        <button className="button" onClick={nextSection}>
          {section === 0 ? "I´m in!" : "Next question"}
        </button>
      )}

      {section === 4 && (
        <button onClick={handleSubmit} className="button" type="submit">
          Send
        </button>
      )}

      {section === 5 && (
        <button onClick={() => setSection(0)} className="button">
          Restart
        </button>
      )}
    </div>
  );
};

export default Buttons;
