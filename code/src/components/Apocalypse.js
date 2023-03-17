import React from 'react';

const Apocalypse = ({ apocalypse, setApocalypse, step }) => {
  console.log('NOW RUNNING Apocalypse.js')
  return (
    <div className="apocalypse-container">
      <div className="headings">
        <h2>Question {step} / 5</h2>
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
              onChange={(event) => setApocalypse(event.target.checked)} />
          </label>
        </form>
        {/* <span>(Current state: {apocalypse ? 'Yes' : 'No'})</span> */}
      </div>
    </div>
  );
};

export default Apocalypse;
