import React from 'react';

const Apocalypse = ({ apocalypse, setApocalypse, step }) => {
  console.log('NOW RUNNING Apocalypse.js')
  return (
    <div className="apocalypse-container">
      <div className="headings">
        <h2>Question {step}</h2>
        <hr />
      </div>
      <div className="question-container">
        <h4>Would you like the show to be about an apocalypse?</h4>
        <form className="form checkbox">
          <p>Current state: {apocalypse ? 'Yes' : 'No'}</p>
          <label htmlFor="apocalypsecheck">
                Yes please
            <input
              type="checkbox"
              id="apocalypsecheck"
              checked={apocalypse}
              onChange={(event) => setApocalypse(event.target.checked)} />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Apocalypse;
