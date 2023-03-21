import React from 'react';

const Apocalypse = ({ apocalypse, setApocalypse, step }) => {
  return (
    <div className="apocalypse-container">
      <div className="headings">
        <h2 aria-hidden="true">Question {step} / 5</h2>
        {/* For screen reader */}
        <h2 className="visually-hidden">Question {step} out of 5</h2>
        <hr />
      </div>
      <div className="question-container">
        <h4>Would you like the show to be about an apocalypse?</h4>
        <form className="form-checkbox">
          <label htmlFor="apocalypsecheck">
                Yes please
            <input
              type="checkbox"
              className="apocalypsecheckbox"
              id="apocalypsecheck"
              tabIndex="0"
              checked={apocalypse}
              aria-checked={apocalypse}
              onChange={(event) => setApocalypse(event.target.checked)} />
            {/* For screen reader */}
            <span className="visually-hidden">
              {apocalypse ? 'The checkbox is checked' : 'The checkbox is not checked'}
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Apocalypse;
