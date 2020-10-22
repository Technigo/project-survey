import React from 'react';

const Summary = ({ userName, userMaincourse, userDrinks }) => {

    return (
        <div>
            <div>Name: {userName}</div>
            <div>Main course: {userMaincourse}</div>
            <div>Drinks: {userDrinks.join(', ')}</div>
        </div>
    );
}

export default Summary;