import React from 'react';
import Button from './Button.js'

const FourthQuestion = ({ userExpectations, onExpectationsChange, section, setSection }) => {

    return (
      <section className="question-section">
        <h2 className="question-header">Uppfyllde aktiviteten dina förväntningar?</h2>
        <div className="radio-buttons expectation">
          <label htmlFor="allTheWay">
          <input 
            type="radio"
            name="expectation"
            value="allTheWay"         
            checked={userExpectations === "allTheWay"}  
            onChange={onExpectationsChange}    
            className="radio-button"
          />
          Jajjemän
          </label>
        </div>
  
        <div className="radio-buttons expectation">
          <label htmlFor="somewhat">
            <input 
              type="radio"
              name="expectation"
              value="somewhat"           
              checked={userExpectations === "somewhat"}
              onChange={onExpectationsChange}
              className="radio-button"
            />
            Något så när</label>
        </div>
  
        <div className="radio-buttons expectation">
          <label htmlFor="dontKnow">
            <input 
              type="radio"
              name="expectation"
              value="dontKnow"           
              checked={userExpectations === "dontKnow"}
              onChange={onExpectationsChange}
              className="radio-button"
            />
            Har inte tänkt på det
          </label>
        </div>

        <div className="radio-buttons expectation">
          <label htmlFor="notReally">
            <input 
              type="radio"
              name="expectation"
              value="notReally"           
              checked={userExpectations === "notReally"}
              onChange={onExpectationsChange}
              className="radio-button"
            />
            Inte riktigt
          </label>
        </div>

        <div className="radio-buttons expectation">
          <label htmlFor="notAtAll">
            <input 
              type="radio"
              name="expectation"
              value="notAtAll"           
              checked={userExpectations === "notAtAll"}
              onChange={onExpectationsChange}
              className="radio-button"
            />
            Nej, inte alls.
          </label>
          </div>
          <Button 
            disable={onExpectationsChange} 
            btnText="Nästa" 
            nextQuestion="fifthQuestion"
            section={section} 
            setSection={setSection}
            currentState={userExpectations}
            defaultState=""
          />
        </section> 
    );
  }
  
  export default FourthQuestion;