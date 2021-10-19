import React, { useState } from 'react';

//This is the first page the user is greeted by, and the servey starts with "onStepChange"
const Welcome = ({ onStepChange }) => {
    return(
        <form>
          <label>Welcome to my survey</label>
            <h2>This weeks topic: Seasons!</h2>
            <button onClick={onStepChange}>Click here to start the survey!</button>
        </form>
    )};

export default Welcome;

