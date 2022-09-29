import React from 'react';

export const Summary = ({ ageGroup, specialGroup }) => {
  return (
    <div>
      <p>Summary</p>
      <p>You belong to the {ageGroup} age group.</p>
      <p>You belong to the following special interest group: {specialGroup}</p>
    </div>
  );
}