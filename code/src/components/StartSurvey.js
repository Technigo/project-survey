import React from 'react';

export const StartSurvey = ({ section }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {section === 0 && (
        <h1>What coffee habits do you have?</h1>
      )}
    </>
  );
};
