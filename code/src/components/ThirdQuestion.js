import React from "react";

export const ThirdQuestion = ({
  houseTypeInput,
  onHouseTypeInputChange,
  onStepChange,
  adressInput,
}) => {
  return (
    <form onSubmit={onStepChange}>
      <div>
        <h2>Typ av bostad</h2>
        <label>
          {adressInput} är en/ett:
          <select onChange={onHouseTypeInputChange} value={houseTypeInput}>
            <option value="">Välj typ av bostad</option>
            <option value="Lägenhet">Lägenhet</option>
            <option value="Radhus">Radhus</option>
            <option value="Villa tätområde">Villa i villaområde</option>
            <option value="Villa lantområde">Villa, lantområde</option>
          </select>
        </label>
      </div>
      <button type="submit">Nästa</button>
    </form>
  );
};

export default ThirdQuestion;
