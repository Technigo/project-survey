import React from 'react';

const Summary = ({ userYearofBirth, userGender, userActivities, printString, userExpectation, userTextInput, section, setSection }) => {

    return (
        <div>
            <p>
                Jag är en {userGender} född år {userYearofBirth}. 
                Jag har deltagit i aktiviteten {userActivities}. 
                {userActivities} kan jag {printString} rekommendera
                till en vän. Aktiviteten {userExpectation} mina förväntningar. 
                Jag vill också skicka med er {userTextInput}.
            </p>
        </div>
    );
}

export default Summary;