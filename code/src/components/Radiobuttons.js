import React, { useState } from "react";

const Radiobuttons = () => {
  const [selectVenue, setSelectVenue] = useState();

  return (
    <form>
      What is your favourite Stockholm live music venue?

      <label htmlFor="berns">
        <input
          id="berns"
          type="radio"
          value="berns"
          onChange={(event) => setSelectVenue(event.target.value)}
          checked={selectVenue === "berns"}
        />
        Berns
      </label>

      <label htmlFor="cirkus">
        <input
          id="cirkus"
          type="radio"
          value="cirkus"
          onChange={(event) => setSelectVenue(event.target.value)}
          checked={selectVenue === "cirkus"}
        />
        Cirkus
      </label>

      <label htmlFor="debaser">
        <input
          id="debaser"
          type="radio"
          value="debaser"
          onChange={(event) => setSelectVenue(event.target.value)}
          checked={selectVenue === "debaser"}
        />
        Debaser
      </label>

      <label htmlFor="globen">
        <input
          id="globen"
          type="radio"
          value="globen"
          onChange={(event) => setSelectVenue(event.target.value)}
          checked={selectVenue === "globen"}
        />
       Globen
       </label>

      <label htmlFor="munchenbryggeriet">
        <input
          id="munchenbryggeriet"
          type="radio"
          value="munchenbryggeriet"
          onChange={(event) => setSelectVenue(event.target.value)}
          checked={selectVenue === "munchenbryggeriet"}
        />
       Münchenbryggeriet
      </label>

      <label htmlFor="slakthuset">
        <input
          id="slakthuset"
          type="radio"
          value="slakthuset"
          onChange={(event) => setSelectVenue(event.target.value)}
          checked={selectVenue === "slakthuset"}
        />
       Slakthuset
      </label>

    </form>
  );
};

export default Radiobuttons;