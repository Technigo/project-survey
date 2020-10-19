import React from 'react';

const AfterSalesQuestions = () => {
  return (
    <div className="after-sales-questions">
      <p>How do you evaluate our AfterSales Services</p>
      <input type="radio" id="averageRating" name="average" value="average" />
      <label for="averageRating">Average</label>
      <input type="radio" id="goodRating" name="good" value="good" />
      <label for="goodRating">Good</label>
      <input type="radio" id="excellentRating" name="excellent" value="excellent" />
      <label for="excellentRating">Excellent</label>
      <input type="radio" id="poorRating" name="poor" value="poor" />
      <label for="poorRating">Poor</label>
      <input type="radio" id="veryPoorRating" name="very poor" value="very poor" />
      <label for="veryPoorRating">Very Poor</label>
    </div>
    );
}
 
export default AfterSalesQuestions;