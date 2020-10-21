import React from 'react';

export const Summary = (props) => {

  return (
    <p>Hi {props.name}, thanks for taking my survey. Your favourite city is: {props.city} and your age group is: {props.ageGroup}.</p>
  )
};