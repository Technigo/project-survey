import React from 'react';

const officeimprovements = ['Red Bull in the office', 'Half day Fridays', 'More dogs in the office', 'Breakfast in the mornings'];

export const OfficeImprovement = ({ officeimprovements, setOfficeImprovements }) => {
  const handleOfficeImprovementChange = (event) => {
    setOfficeImprovements(event.target.value);
  }

  return (
    <div>
      <form>
        <h2>What can we do to improve??</h2>
        {officeimprovements.map((improve) => (
          <label key={improve} htmlFor="officeimprovements">
            <input
              id="officeimprovements"
              type="radio"
              value={improve}
              onChange={handleOfficeImprovementChange}
              checked={improve === handleOfficeImprovementChange} />
            {improve}
          </label>
        ))}
      </form>
    </div>
  )
};