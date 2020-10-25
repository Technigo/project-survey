import React from 'react';

import '../style/summary.css';

export const Summary = ({name, location, ageGroup, rating, musicGenre}) => {

  return (
    <p>Hi <span className="bold-text">{name}</span>, thank you for taking the Music-Radar survey. Your favourite city to watch live music is: <span className="bold-text">{location}</span> and your age group is: <span className="bold-text">{ageGroup} old</span>. 
    You rated your last live music experience as <span className="bold-text">{rating}</span> out of 10.</p>
  );
};