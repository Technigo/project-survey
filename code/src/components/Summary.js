/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Summary = ({ price, productType, gender, ageGroup }) => {
  return (
    <div className="summary-div">
      <p> Här kommer en summering av dina svar:</p>
      <table><th>Questions</th>
        <tr>
          <th>Age</th>
          <th>{ageGroup}</th>
        </tr>
        <tr>
          <th>Gender</th>
          <th>{gender}</th>
        </tr>
        <tr>
          <th>Products I'm interested in:</th>
          <th>{productType}</th>
        </tr>
        <tr>
          <th>I could pay: </th>
          <th>{price}</th>
        </tr>
      </table>
    </div>

  );
};

export default Summary
