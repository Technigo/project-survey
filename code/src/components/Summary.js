import React from 'react';

export const Summary = ({ startDay, relationship, whatKinde, feeling }) => {
  return (
    <>
      {section === 5 && (
        <form>
          <div className="summary-section">
            <p>You start youre day with {startDay}</p>
            <p>This is youre relationship to coffee: {relationship}</p>
            <p> and you preffer {whatKinde}</p>
            <p> Coffee makes you feel.. {feeling}</p>

            <h3> Have a GREAT day!</h3>
          </div>
        </form>
      )}
      ;
    </>
  );
};
