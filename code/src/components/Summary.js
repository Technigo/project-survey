import React from 'react';

export const Summary = ({ name, improveInput, teamEvent }) => {
  return (
    <>
      <p>Thank you <b>{name}</b> for your feedback!</p>
      <p>You picked <b>{improveInput}</b> for office improvement.</p>
      <p>You choosed <b>{teamEvent}</b> for next team event.</p>
    </>
  );
}