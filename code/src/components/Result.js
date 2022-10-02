import React from 'react';

export const Result = ({ name, age, city, level, writing, better, email}) => {
  return (
    <>
    <p><b>Thank you {name} </b> for your participation! Below you can see your answers to this survey</p>
    <p><b>Your age are:</b> {age}</p>
    <p><b>Country the course is taken in:</b> {city}</p>
    <p><b>Your windsurfing style:</b> {level}</p>
    <p><b>This was good:</b></p>
    <i> {better}</i>
    <p><b>This could be better:</b></p>
    <i>{writing}</i>
    <p>In a few minutes you will recive an email at <b>{email}</b> with an 5% discount to use for yor next windsurfing course with us. </p>
    <h3>Happy surf!!</h3> 
    </>
  );
}

export default Result