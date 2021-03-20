import React from "react";

import './Radiobuttons2.css'

const Radiobuttons2 = ({ selectMidVenue, setSelectMidVenue }) => {

  return (
    <form className="radio-medium" tabIndex="0">
      <h4 className="medium-live-heading"> What is your favourite medium sized Stockholm live music venue?
      </h4>

      <label className="medium-venue-heading" htmlFor="fryshuset">
        <input
          className="medium-selection-dot"
          id="fryshuset"
          type="radio"
          value="Fryshuset"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "Fryshuset"}
        />
       Fryshuset
       </label>

       <label className="medium-venue-heading" htmlFor="munchenbryggeriet">
        <input
          className="medium-selection-dot"
          id="munchenbryggeriet"
          type="radio"
          value="Münchenbryggeriet"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "Münchenbryggeriet"}
        />
      Münchenbryggeriet
       </label>

      <label className="medium-venue-heading" htmlFor="cirkus">
        <input
          className="medium-selection-dot"
          id="cirkus"
          type="radio"
          value="Cirkus"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "Cirkus"}
        />
        Cirkus
      </label>
    

    </form>
  );
};

export default Radiobuttons2;