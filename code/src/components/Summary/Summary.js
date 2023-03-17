import React from 'react';
import './Summary.css';

export const Summary = ({
  name,
  date,
  transportation,
  equipment,
  addInfo,
  textbox
}) => {
  console.log(name, date, transportation, equipment, addInfo, textbox);
  return (
    <section className="summary-wrapper" aria-labelledby="summary-heading">
      <h2 id="summary-heading">
        Thank you for your time <em aria-label={`Added name: ${name}`}>{name}</em>!
      </h2>
      <p>
        We have noted that you are going to the lodge by{' '}
        <em aria-label={`Selected transportation method: ${transportation}`}>{transportation}</em>, that you are interested in renting{' '}
        <em aria-label={`Selected equipment: ${equipment}`}>{equipment}</em> equipment,{' '}
        <em>
          {addInfo === 'yes' ? (
            <>
              {' '}
              and that you would like to add that <em aria-label={`Added additional information: ${textbox}`}>{textbox}</em>.
            </>
          ) : (
            ' and that you have nothing to add.'
          )}
        </em>
      </p>
      <p>
        Thank you once again for choosing us as your destination, and we look
        forward to welcoming you on <em aria-label={`Chosen arrival date: ${date}`}>{date}</em>!
      </p>
      <p className="regards-text">Best regards,</p>
      <p className="regards-text">The Mountain Lodge team</p>
    </section>
  );
};