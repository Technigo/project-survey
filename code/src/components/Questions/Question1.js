import React from 'react';



const FavIceNames = ({ favIceName, onFavIceNameChange }) => {

  return (
    <div className="card">
      <div className="question">
        <h3 >What is your name?</h3>
      </div>
      <label htmlFor="favIceName"></label>
      <input
        type="text"
        placeholder="Super woman"
        id="favIceName"
        value={favIceName}
        onChange={e => onFavIceNameChange(e.target.value)}
      />
      {/* <input type="submit" value="Submit" /> */}
      {/* <input type="reset" value="Reset" /> */}
    </div>
  );
};


export default FavIceNames