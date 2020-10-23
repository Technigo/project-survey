import React from 'react';

const Summary = ({ userName, userMaincourse, userDrinks, userDessert }) => {

    return (
        <div className="summary">
        <h1>Thanks for your order {userName} </h1>
           <h2>Here's your menu:</h2>
            <p>Main course: {userMaincourse}</p>
            <p>Drinks: {userDrinks.join(', ')}</p>
            <p>Dessert: {userDessert}</p> 
            <h2>Enjoy your meal!</h2>       
        </div>
    );
}

export default Summary;