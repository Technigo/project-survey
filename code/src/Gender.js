import React, { useState } from "react";

export const Gender = () => {
  const [gender, setGender] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
      What's your gender:
      <select onChange={event => setGender(event.target.value)} value={gender}>
        <option value=''>Select </option>
        <option value='Female'>Female</option>
        <option value='Male'>Male</option>
        <option value='Neutral'>Neutral</option>
      </select>
      <div className='summary'>
        <h1>Your gender is: {gender}</h1>
      </div>
    </form>
  );
};

export default Gender;
