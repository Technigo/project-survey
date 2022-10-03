/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Summary = ({
  price1, price2, price3, productType,
  gender, ageGroup
}) => {
  return (
    <div className="summary-div">
      <h2> Thank you for participating.</h2>
      <p className="narrowerP"> Your input will help me a lot with my future business plans!</p>
      <h3>You're discount code is <span className="span2">YwhLbAG8.</span></h3>
      <p>Here is a summary of your submitted answers.
      </p>
      <table><th><h2>Questions</h2></th>
        <th><h2>Answers</h2></th>
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
          <th>I could pay for item 1: </th>
          <th>{price1} SEK</th>
        </tr>
        <tr>
          <th>I could pay for item 2: </th>
          <th>{price2} SEK</th>
        </tr>
        <tr>
          <th>I could pay for item 3: </th>
          <th>{price3} SEK</th>
        </tr>
      </table>
      <p />
      <div className="QR-div" />
    </div>

  );
};

export default Summary
