import React, { useState } from "react";

const Radiobuttons2 = () => {
  const [selectMidVenue, setSelectMidVenue] = useState();

  return (
    <form tabIndex="0">
      What is your favourite medium live music venue?

      <label htmlFor="fryshuset">
        <input
          id="fryshuset"
          type="radio"
          value="fryshuset"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "fryshuset"}
        />
       Fryshuset
       </label>

       <label htmlFor="munchenbryggeriet">
        <input
          id="munchenbryggeriet"
          type="radio"
          value="munchenbryggeriet"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "munchenbryggeriet"}
        />
      Münchenbryggeriet
       </label>

      <label htmlFor="cirkus">
        <input
          id="cirkus"
          type="radio"
          value="cirkus"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "cirkus"}
        />
        Cirkus
      </label>

    </form>
  );
};

export default Radiobuttons2;