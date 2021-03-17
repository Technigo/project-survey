import React from 'react';

const Welcome = (props) => {
    const {startSurvey, setStartSurvey} = props;
    return (
        <>
        <h1>Tell us what you think... </h1>
        <p>
          Thank you for filling out our survey. Your answers will remain anonymous. 
        </p>
        <button onClick={startSurvey}>Start survey!</button>
        </>

    );
};

export default Welcome;