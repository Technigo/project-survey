import React from 'react';

const Summary = ({ userYearofBirth, userGender, userActivities, userExpectation, userRecommendation, userTextInput }) => {

    return (
        <div>
            <p>
                Jag är en {userGender} född år {userYearofBirth}. 
                Jag har deltagit i aktiviteten {userActivities}. 
                {userActivities} kan jag {userRecommendation} rekommendera
                till en vän. Aktiviteten uppfyllde {userExpectation} mina förväntningar. 
                Jag vill också skicka med er {userTextInput}.
            </p>
        </div>
    );
}

export default Summary;