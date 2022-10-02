import React from 'react';

export const Summary = ({ section, startDay, relationships, whatKinde, feeling }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {section === 5 && (
        <form className="summary">
          <div className="summary-section">
            <h2>Here are your answers:</h2>
            <div className="text-container">
              <p>You start youre day with:  {startDay}.</p>
              <p>Youre relationship to coffee is:  {relationships}.</p>
              <p>You preffer coffee  {whatKinde}.</p>
              <p>Coffee makes you feel like..  {feeling}!</p>
              <h3> Have a GREAT day!</h3>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
