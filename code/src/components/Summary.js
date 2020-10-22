import React from 'react';

export const Summary = ({name, location, ageGroup, wantsNewsletter}) => {

  return (
    <p>Hi {name}, thanks for taking my survey. Your favourite city is: {location} and your age group is: {ageGroup}. Also you want a newsletter is: {wantsNewsletter}</p>
  )
};