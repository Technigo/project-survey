import React from 'react';
import './Summary.css';

export const Summary = ({ name, date, transportation, skiEquip, textbox }) => {
  return (
    <>
      <p>Thank you for your time {name}!</p>
      <p>
        We have noted that your transportation need is {transportation}, that
        your need for ski equipment is {skiEquip}, and that you would like to
        add that {textbox}.
      </p>
      <p>
        Thank you once again for choosing us as your destination, and we look
        forward to welcoming you on {date}!
      </p>
      <p>Best regards, The Mountain Lodge team</p>
    </>
  );
};