import React from 'react';
import Button from './Button';

const FifthQuestion = ({ userRecommendation, onRecommendationChange, section, setSection }) => {

    return (
      <section className="question-section">
        <h2 className="question-header">Skulle du rekommendera aktiviteten till en vän?</h2>
        <div className="radio-buttons recommendation">
          <label htmlFor="redanGjort">
          <input 
            type="radio"
            name="recommendation"
            value="redanGjort"         
            checked={userRecommendation === "redanGjort"}  
            onChange={onRecommendationChange}    
            className="radio-button"
          />
          Redan gjort
          </label>
        </div>
  
        <div className="recommendation-radio-buttons">
          <label htmlFor="närJagKan">
            <input 
              type="radio"
              name="recommendation"
              value="närJagKan"           
              checked={userRecommendation === "närJagKan"}
              onChange={onRecommendationChange}
              className="radio-button"
            />
            När jag kan</label>
        </div>
  
        <div className="recommendation-radio-buttons">
          <label htmlFor="vetInte">
            <input 
              type="radio"
              name="recommendation"
              value="vetInte"           
              onChange={onRecommendationChange}
              checked={userRecommendation === "vetInte"}
              className="radio-button"
            />
            Har inte tänkt på det
          </label>
        </div>

        <div className="recommendation-radio-buttons">
          <label htmlFor="troligenInte">
            <input 
              type="radio"
              name="recommendation"
              value="troligenInte"           
              checked={userRecommendation === "troligenInte"}
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
              value="nej"           
              checked={userRecommendation === "nej"}
              onChange={onRecommendationChange}
              className="radio-button"
            />
            Nej, det kommer jag inte göra
          </label>
          </div>
          <Button 
            disable={onRecommendationChange} 
            btnText="Nästa" 
            nextQuestion="sixthQuestion"
            section={section} 
            setSection={setSection}
            currentState={userRecommendation}
            defaultState=""
          />
        </section>
    );
  }
  
  export default FifthQuestion;