import React from 'react';

const Summary = ({ userYearofBirth, userGender, userActivities, userRecommendation, userExpectation, userTextInput, section, setSection }) => {

    return (
        <div>
            <div>{userYearofBirth}</div>
            <div>{userGender}</div>
            <div>{userActivities}</div>
            <div>{userRecommendation}</div>
            <div>{userExpectation}</div>
            <div>{userTextInput}</div>
        </div>
    );
}

export default Summary;