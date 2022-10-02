import React from 'react';

const officeImprovements = ['Red Bull in the office', 'Half day Fridays', 'More dogs in the office', 'Breakfast in the mornings'];

export const OfficeImprovement = ({ improveInput, setImproveInput }) => {
  const handleOfficeImprovementChange = (event) => {
    setImproveInput(event.target.value);
  }

  return (
    <div>
      <form>
        <h2><b>What can we do to improve?</b></h2>
        <div className="officeChoice">
          {officeImprovements.map((improve) => (
            <label key={improve} htmlFor="ImproveInput">
              <input
                id="officeImprovement"
                type="radio"
                value={improve}
                onChange={handleOfficeImprovementChange}
                checked={improveInput === improve} />
              {improve}
              <br />
            </label>
          ))}
        </div>
      </form>
    </div>
  )
};

