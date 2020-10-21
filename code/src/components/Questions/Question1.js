import React, { useState } from 'react';



const FavIceNames = () => {
  const [favIceName, setFavIceName] = useState(' ');


  return (

    <form className="QCard" onSubmit={(event) => event.prevent}>
      <h3>What is you favourite Ice cream?</h3>
      <input
        type="text"
        placeholder="Tivoli strut"
        onChange={(event) => setFavIceName(event.target.value)}
        value={favIceName}
      />
      <input type="submit" value="Submit" />
      {/* <input type="reset" value="Reset" /> */}
    </form >
  );
};


export default FavIceNames