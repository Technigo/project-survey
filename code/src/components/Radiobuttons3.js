import React, { useState } from "react";

const Radiobuttons3 = () => {
  const [selectSmallVenue, setSelectSmallVenue] = useState();

  return (
    <form tabIndex="0">
      What is your favourite smaller live music venue?

      <label htmlFor="berns">
        <input
          id="berns"
          type="radio"
          value="berns"
          onChange={(event) => setSelectSmallVenue(event.target.value)}
          checked={selectSmallVenue === "berns"} //Can perhaps be removed?
        />
       Berns
       </label>

       <label htmlFor="debaser">
        <input
          id="debaser"
          type="radio"
          value="debaser"
          onChange={(event) => setSelectSmallVenue(event.target.value)}
          checked={selectSmallVenue === "debaser"}
        />
      Debaser
       </label>

      <label htmlFor="nalen">
        <input
          id="nalen"
          type="radio"
          value="nalen"
          onChange={(event) => setSelectSmallVenue(event.target.value)}
          checked={selectSmallVenue === "nalen"}
        />
       Nalen
      </label>

    </form>
  );
};

export default Radiobuttons3;