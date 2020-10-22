import React from 'react';

const RadioButtonGroupRecommendation = ({ userRecommendation, onRecommendationChange }) => {

    return (
      <div> 
        <h2 className="question-header">Skulle du rekommendera aktiviteten till en vän?</h2>
        <div className="recommendation-radio-buttons">
          <label htmlFor="alreadyDid">
          <input 
            type="radio"
            name="recommendation"
            value="alreadyDid"         
            checked={userRecommendation === "alreadyDid"}  
            onChange={onRecommendationChange}    
            className="radio-button"
          />
          Redan gjort
          </label>
        </div>
  
        <div className="recommendation-radio-buttons">
          <label htmlFor="onMyWay">
            <input 
              type="radio"
              name="recommendation"
              value="onMyWay"           
              checked={userRecommendation === "onMyWay"}
              onChange={onRecommendationChange}
              className="radio-button"
            />
            När jag kan</label>
        </div>
  
        <div className="recommendation-radio-buttons">
          <label htmlFor="dontKnow">
            <input 
              type="radio"
              name="recommendation"
              value="dontKnow"           
              onChange={onRecommendationChange}
              checked={userRecommendation === "dontKnow"}
              className="radio-button"
            />
            Har inte tänkt på det
          </label>
        </div>

        <div className="recommendation-radio-buttons">
          <label htmlFor="probablyNot">
            <input 
              type="radio"
              name="recommendation"
              value="probablyNot"           
              checked={userRecommendation === "probablyNot"}
              onChange={onRecommendationChange}
              className="radio-button"
            />
            Tror inte det
          </label>
        </div>

        <div className="recommendation-radio-buttons">
          <label htmlFor="noWay">
            <input 
              type="radio"
              name="recommendation"
              value="noWay"           
              checked={userRecommendation === "noWay"}
              onChange={onRecommendationChange}
              className="radio-button"
            />
            Nej, det kommer jag inte göra
          </label>
          </div>
        </div>
    );
  }
  
  export default RadioButtonGroupRecommendation;