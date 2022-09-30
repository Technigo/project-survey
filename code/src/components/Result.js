import React from 'react';

export const Result = ({ name, age, city, level, writing, better, email}) => {
  return (
    <>
      <p>Thank you <b> {name} </b> for yor participation! </p>
      <p><b>Your age are:</b> {age}</p>
      <p><b>Course taken in:</b> {city}</p>
      <p><b>Your windsurfing style:</b> {level}</p>
      <p><b>This could be better:</b> {writing}</p>
      <p><b>This was good:</b> {better}</p>
      <p>As you submit you will return an e-mail to <b>{email} </b> You will in a few minutes revive an email with a discount to use for your next course. Have e good day and happy surf!</p> 
    </>
  );
}

export default Result