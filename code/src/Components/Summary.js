import React from 'react'

const Summary = ({ userName, userMaincourse, userDrinks, userDessert }) => {

    return (
        <div className="summary">
            <h1>Thanks for your order {userName} ! </h1>
            <h2>Here's your menu:</h2>
            <p> {userMaincourse}</p>
            <p> {userDrinks.join(', ')}</p>
            <p> {userDessert}</p>
            <h3>Enjoy your meal!</h3>
        </div>
    )
}

export default Summary