/* eslint-disable linebreak-style */
import React from 'react';

export const Result = ({ name, age, gender, country, happy }) => {
  return (
    <div className="typewriter">
      <p>Your name is: {name}
       You are: {age} years old
       You identify as: {gender}
       You live in: {country}
       You are currently feeling: {happy}% happy
      </p>
    </div>
  )
}