import React from "react";

import './Radiobuttons3.css'

const Radiobuttons3 = ({ selectSmallVenue, setSelectSmallVenue }) => {

  return (

    <form className="radio-small" tabIndex="0">
      <h4 className="small-live-heading">What is your favourite smaller sized Stockholm live music venue?
      </h4>
  
        <label className="small-venue-heading" htmlFor="berns">
          <input
            className="small-selection-dot"
            id="berns"
            type="radio"
            value="Berns"
            onChange={(event) => setSelectSmallVenue(event.target.value)}
            checked={selectSmallVenue === "Berns"} 
          />
          Berns
        </label>

        <label className="small-venue-heading" htmlFor="debaser">
          <input
            className="small-selection-dot"
            id="debaser"
            type="radio"
            value="Debaser"
            onChange={(event) => setSelectSmallVenue(event.target.value)}
            checked={selectSmallVenue === "Debaser"}
          />
          Debaser
        </label>

        <label className="small-venue-heading" htmlFor="nalen">
          <input
            className="small-selection-dot"
            id="nalen"
            type="radio"
            value="Nalen"
            onChange={(event) => setSelectSmallVenue(event.target.value)}
            checked={selectSmallVenue === "Nalen"}
          />
          Nalen
        </label>
    </form>
  );
};

export default Radiobuttons3;