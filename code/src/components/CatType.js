import React from "react";
import { useState } from "react";

const CatType = () => {
  const [cat, setCat] = useState("");
  return (
    <form>
      <select onChange={(event) => setCat(event.target.value)} value={cat}>
        <option value=""> Select cat:</option>
        <option value="bondkatt">Bondkatt</option>
        <option value="helig-birma">Helig Birma</option>
        <option value="naken-katt">Nakenkatt</option>
      </select>
    </form>
  );
};
export default CatType;
