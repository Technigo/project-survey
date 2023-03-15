/* eslint-disable */

import React from "react";
import { NextQuestionButton } from "./NextQuestionButton";

export const TypeOfproductQuestion = ({ product, onProductChange }) => {

  return (
    <>
      <div>
        <p>
          Which product do you purchase from us?
        </p>
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
      <NextQuestionButton button="NextQuestion" />
    </>
  );
};