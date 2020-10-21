import React, { useState } from 'react';

const numIceCreams = ["0-2", "3-5", "5+"]

const PickIceNum = () => {

  const [numIceCream, setNumIceCream] = useState();

  return (
    <form className="QCard">
      <h3 className="QTitle">How many ice creams do you eat/month?</h3>
      {numIceCreams.map(number => (

        <label key={number}>
          <input
            type="radio"
            value={number}
            onChange={(event) => setNumIceCream(event.target.value)}
            checked={numIceCream === number}
          />
          {number}
        </label>
      ))}
    </form>
  );

};


export default PickIceNum