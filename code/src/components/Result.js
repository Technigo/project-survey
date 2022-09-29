import React from 'react';

export const Result = ({ name, age, city, level }) => {
  return (
    <>
      <p>Thank you {name} for yor participation! Below you can see your answers. If you're happy with yor answers please submit to send it to us.</p>
      <p>Your age are: {age}</p>
      <p>Chosen climbingcenter: {city}</p>
      <p>Your climbing style: {level}</p>
      <p>As you submit you will return an e-mail with some discount on your next course. Have e good day and climb safe</p> // when click on button submit an response will show "thank you climb safe"
    </>
  );
}

export default Result