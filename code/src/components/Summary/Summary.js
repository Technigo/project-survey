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
    <>
      <p>
        Thank you for your time <span>{name}</span>!
      </p>
      <p>
        We have noted that you are going to the lodge by{' '}
        <span>{transportation}</span>, that you are interested in renting{' '}
        <span>{equipment}</span> equipment,{' '}
        <span>
          {addInfo === 'yes' ? (
            <>
              {' '}
              and that you would like to add that <span>{textbox}</span>.
            </>
          ) : (
            ' and that you have nothing to add.'
          )}
        </span>
      </p>
      <p>
        Thank you once again for choosing us as your destination, and we look
        forward to welcoming you on <span>{date}</span>!
      </p>
      <p>Best regards,</p>
      <p>The Mountain Lodge team</p>
    </>
  );
};