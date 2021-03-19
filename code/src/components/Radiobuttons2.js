import React from "react";

const Radiobuttons2 = ({ selectMidVenue, setSelectMidVenue }) => {

  return (
    <form className="medium-venues" tabIndex="0">
 
      What is your favourite medium live music venue?

      <label htmlFor="fryshuset">
        <input
          id="fryshuset"
          type="radio"
          value="Fryshuset"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "Fryshuset"}
        />
       Fryshuset
       </label>

       <label htmlFor="munchenbryggeriet">
        <input
          id="munchenbryggeriet"
          type="radio"
          value="Münchenbryggeriet"
          onChange={(event) => setSelectMidVenue(event.target.value)}
          checked={selectMidVenue === "Münchenbryggeriet"}
        />
      Münchenbryggeriet
       </label>

      <label htmlFor="cirkus">
        <input
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