import React from "react";

const Radiobuttons1 = ({ selectBigVenue, setSelectBigVenue }) => {

  return (
    <form tabIndex="0">
      What is your favourite big live music venue?

      <label htmlFor="globe">
        <input
          id="globe"
          type="radio"
          value="Ericsson Globe"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "Ericsson Globe"}
        />
        Ericsson Globe
      </label>

      <label htmlFor="friends">
        <input
          id="friends"
          type="radio"
          value="Friends Arena"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "Friends Arena"}
        />
        Friends Arena
      </label>

      <label htmlFor="tele2">
        <input
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