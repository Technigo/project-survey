import React from "react";

export const ThirdQuestion = ({
  houseTypeInput,
  onHouseTypeInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <div>
        Det är en:
        <select onChange={onHouseTypeInputChange} value={houseTypeInput}>
          <option value="">Välj typ av bostad</option>
          <option value="Lägenhet">Lägenhet</option>
          <option value="Radhus">Radhus</option>
          <option value="Villa tätområde">Villa i tätområde</option>
          <option value="Villa lantområde">Villa i lantområde</option>
        </select>
      </div>
      <button onClick={onStepChange}>Nästa</button>
    </form>
  );
};

export default ThirdQuestion;
