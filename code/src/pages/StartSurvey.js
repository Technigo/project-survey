import React, { useState } from 'react';

import { Form } from './Form.js';

export const StartSurvey = () => {

    const [ enterForm, setEnterForm ] = useState(false);

    // If enterForm useState is false then the welcome message is show else it will be true as the user will have pressed the start survey button and the from page/component will be show. 

    return (
        <section>
        {enterForm === false ? (
          <div className="welcome-container">               
            <h2 tabIndex="0">Craft Beer Co. survey</h2>
            <p 
              tabIndex="0" 
              aria-label="Tab and press enter to start the survey to help us improve our products">
                Fill out the survey to help us improve our products!
            </p>
            <div>
              <button 
                type="button" 
                className="button yes-button" 
                aria-label="Press enter to start the survey"               
                onClick={() => setEnterForm(true)}>
                  START SURVEY
              </button>
            </div>
          </div>
          ) : (
          <Form />
          )}  
      </section>
    );
};
