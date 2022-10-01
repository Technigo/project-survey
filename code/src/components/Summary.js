import React from 'react';

export const Summary = ({ section, startDay, relationships, whatKinde, feeling }) => {
  return (
    <>
      {section === 5 && (
        <form>
          <div className="summary-section">
            <h2>Here are your answers:</h2>
            <p>You start youre day with: {startDay}.</p>
            <p>Youre relationship to coffee is: {relationships}.</p>
            <p>You preffer coffe {whatKinde}.</p>
            <p>Coffee makes you feel like.. {feeling}</p>

            <h3> Have a GREAT day!</h3>
          </div>
        </form>
      )};
    </>
  );
};
