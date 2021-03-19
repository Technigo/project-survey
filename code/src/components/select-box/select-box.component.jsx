/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";

import {
  ButtonContainer,
  ButtonText,
  ButtonsContainer,
  Label
} from "../../assets/styles/shared";

import { SeasonSelect } from "./select-box.style";

const Season = () => {
  const [season, setSeason] = useState(
    localStorage.getItem("Season") || ""
  );

  const onSeasonChange = (e) => {
    setSeason(e.target.value);
  };

  const onNextHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Season", season);
  };

  return (
    <>
      <Label htmlFor="season">Favourite season</Label>
      <SeasonSelect
        id="season"
        onChange={onSeasonChange}
        value={season}
        className="select">
        <option disabled />
        <option>Winter</option>
        <option>Spring</option>
        <option>Summer</option>
        <option>Fall</option>
      </SeasonSelect>
      <ButtonsContainer>
        <ButtonContainer type="submit">
          <ButtonText to="/step-1">Previous</ButtonText>
        </ButtonContainer>
        <ButtonContainer type="submit" onClick={onNextHandler}>
          <ButtonText to="/step-3">Next</ButtonText>
        </ButtonContainer>
      </ButtonsContainer>
    </>
  );
};

export default Season;
