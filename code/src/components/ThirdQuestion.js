import React from "react";
import Header from "./Header";

export const ThirdQuestion = ({
  houseTypeInput,
  onHouseTypeInputChange,
  onStepChange,
  adressInput,
}) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <img
          src="https://www.ehandel.se/wp-content/uploads/2020/10/citymail_fossilfritt.jpg"
          alt="Citymail bil"
          className="side-picture"
        />
        <form onSubmit={onStepChange} className="content-container">
          <div>
            <h2>Typ av bostad</h2>
            <label className="input-label-container">
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
      </div>
    </>
  );
};

export default ThirdQuestion;
