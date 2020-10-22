import React from 'react';

const RadioButtonGroupExpectations = ({ userExpectations, onExpectationsChange }) => {

    return (
      <div> 
        <h2 className="question-header">Skulle du rekommendera aktiviteten till en vän?</h2>
        <div className="radio-buttons expectation">
          <label htmlFor="allTheWay">
          <input 
            type="radio"
            name="expectation"
            value="allTheWay"         
            checked={userRecommendation === "allTheWay"}  
            onChange={onRecommendationChange}    
            className="radio-button"
          />
          
          </label>
        </div>
  
        <div className="radio-buttons expectation">
          <label htmlFor="onMyWay">
            <input 
              type="radio"
              name="expectation"
              value="onMyWay"           
              checked={userRecommendation === "onMyWay"}
              onChange={onRecommendationChange}
              className="radio-button"
            />
            När jag kan</label>
        </div>
  
        <div className="radio-buttons expectation">
          <label htmlFor="dontKnow">
            <input 
              type="radio"
              name="expectation"
              value="dontKnow"           
              onChange={onRecommendationChange}
              checked={userRecommendation === "dontKnow"}
              className="radio-button"
            />
            Har inte tänkt på det
          </label>
        </div>

        <div className="radio-buttons expectation">
          <label htmlFor="probablyNot">
            <input 
              type="radio"
              name="expectation"
              value="probablyNot"           
              onChange={onRecommendationChange}
              checked={userRecommendation === "probablyNot"}
              className="radio-button"
            />
            Tror inte det
          </label>
        </div>

        <div className="radio-buttons expectation">
          <label htmlFor="noWay">
            <input 
              type="radio"
              name="expectation"
              value="noWay"           
              onChange={onRecommendationChange}
              checked={userRecommendation === "noWay"}
              className="radio-button"
            />
            Nej, det kommer jag inte göra
          </label>
          </div>
        </div>
    );
  }
  
  export default RadioButtonGroupExpectations;