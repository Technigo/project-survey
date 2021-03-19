import React from "react";

const Radiobuttons3 = ({ selectSmallVenue, setSelectSmallVenue }) => {

  return (
    <form tabIndex="0">
      What is your favourite smaller live music venue?

      <label htmlFor="berns">
        <input
          id="berns"
          type="radio"
          value="Berns"
          onChange={(event) => setSelectSmallVenue(event.target.value)}
          checked={selectSmallVenue === "Berns"} 
        />
       Berns
       </label>

       <label htmlFor="debaser">
        <input
          id="debaser"
          type="radio"
          value="Debaser"
          onChange={(event) => setSelectSmallVenue(event.target.value)}
          checked={selectSmallVenue === "Debaser"}
        />
      Debaser
       </label>

      <label htmlFor="nalen">
        <input
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