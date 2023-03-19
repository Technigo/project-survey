/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";
import { BackQuestionButton } from "./BackQuestionButton";


export const TypeOfproductQuestion = ({ product, onProductChange, onClickBack, onClickNext}) => {

  return (
    <div className="productTypeBox">
      <p>
        Which product do you purchase from us?
      </p>
      <div className="selectBox">
        <select
          onChange={onProductChange}
          value={product}
        >
          <option value="">select product</option>
          <option value="Contact Lenses">Contact Lenses</option>
          <option value="Glasses">Glasses</option>
          <option value="Sunglasses">Sunglasses</option>
        </select>
      </div>
      <div className="buttonWraperBox">
        <BackQuestionButton button="Back" onClickBack={onClickBack} />
        <NextQuestionButton button="Next" onClickNext={onClickNext} />
      </div>
    </div>
  );
};