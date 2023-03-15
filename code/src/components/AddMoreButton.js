/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

/* AddMoreButton that renders two buttons "Yes" and "No, that's all" and takes handleAddMoreClick as a prop */

export const AddMoreButton = ({ handleAddMoreClick }) => (
  <div>
    <p>Do you want to add anything to the packing list?</p>
    <button type="button" onClick={handleAddMoreClick}>Yes</button>
    <button type="button" onClick={handleAddMoreClick}>No, that's all</button>
  </div>
);
