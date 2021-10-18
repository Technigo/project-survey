import React from "react";
import { useState } from "react";

/* let CatTypeSubmit = "";
console.log(CatTypeSubmit); */

const CatType = () => {
  const [cat, setCat] = useState("");
  return (
    <form>
      <select onChange={(event) => setCat(event.target.value)} value={cat}>
        <option disabled value="">
          {" "}
          Select cat:
        </option>
        <option value="bondkatt">Bondkatt</option>
        <option value="helig-birma">Helig Birma</option>
        <option value="naken-katt">Nakenkatt</option>
      </select>
      {/* <button onSubmit={(event) => CatTypeSubmit(event.target.value)}>
        Select
      </button> */}
    </form>
  );
};
export default CatType;
