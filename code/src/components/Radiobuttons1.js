import React, { useState } from "react";

const Radiobuttons1 = () => {
  const [selectBigVenue, setSelectBigVenue] = useState();

  return (
    <form>
      What is your favourite big live music venue?

      <label htmlFor="globe">
        <input
          id="globe"
          type="radio"
          value="globe"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "globe"}
        />
        Ericsson Globe
      </label>

      <label htmlFor="friends">
        <input
          id="friends"
          type="radio"
          value="friends"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "friends"}
        />
        Friends Arena
      </label>

      <label htmlFor="tele2">
        <input
          id="tele2"
          type="radio"
          value="tele2"
          onChange={(event) => setSelectBigVenue(event.target.value)}
          checked={selectBigVenue === "tele2"}
        />
        Tele2 Arena
      </label>

    </form>
  );
};

export default Radiobuttons1;