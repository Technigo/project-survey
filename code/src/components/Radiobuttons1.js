import React from "react";

import './Radiobuttons1.css'

const Radiobuttons1 = ({ selectBigVenue, setSelectBigVenue }) => {

  return (
    <form className="radio-big" tabIndex="0">
      <h4 className="big-live-heading">What is your favourite big live music venue?
      </h4>

      <label className="big-venue-heading" htmlFor="globe">
        <input
          className="big-selection-dot"
          id="globe"
          type="radio"
          value="Ericsson Globe"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "Ericsson Globe"}
        />
        Ericsson Globe
      </label>

      <label className="big-venue-heading" htmlFor="friends">
        <input
          className="big-selection-dot"
          id="friends"
          type="radio"
          value="Friends Arena"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "Friends Arena"}
        />
        Friends Arena
      </label>

      <label className="big-venue-heading" htmlFor="tele2">
        <input
          className="big-selection-dot"
          id="tele2"
          type="radio"
          value="Tele2 Arena"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "Tele2 Arena"}
        />
        Tele2 Arena
      </label>

    </form>
  );
};

export default Radiobuttons1;