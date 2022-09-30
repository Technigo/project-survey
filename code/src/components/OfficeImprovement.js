import React from 'react';

const officeImprovements = ['Red Bull in the office', 'Half day Fridays', 'More dogs in the office', 'Breakfast in the mornings'];

const OfficeImprovement = ({ improveInput, setImproveInput }) => {
  const handleOfficeImprovementChange = (event) => {
    setImproveInput(event.target.value);
  }

  return (
    <div>
      <form>
        <h2>What can we do to improve??</h2>
        {officeImprovements.map((improve) => (
          <label key={improve} htmlFor="ImproveInput">
            <input
              id="officeImprovement"
              type="radio"
              value={improve}
              onChange={handleOfficeImprovementChange}
              checked={improveInput === improve} />
            {improve}
          </label>
        ))}
      </form>
    </div>
  )
};

export default OfficeImprovement;