import React, { useState } from 'react';

const locationResponse = location => {
    if (location === 'gothenburg') {
        return 'Gothenburg. Hope you had fun!'
    } else if (location === 'stockholm') {
        return 'Stockholm. Hope you had fun!'
    } else if (location === 'umea') {
        return 'Umea. Hope you had fun!'
    }
}

const radioButtonResponse = (radioButton1, radioButton2, radioButton3) => {
    if (radioButton1 === 'candyCanes') {
        return 'Thank you for participating in our Candy Canes baking experience in'
    } else if (radioButton2 === 'gingerBreadHouses') {
        return 'Thank you for participating in our Ginger Bread Houses baking experience in'
    } else if (radioButton3 === 'christmasChocolates') {
        return 'Thank you for participating in our Christmas Chocolates baking experience in'
    }
}

const Summary =({location, radioButton1, radioButton2, radioButton3, feedback1, feedback2}) => {
    return (
        <div className="summary">
            <h2> {radioButtonResponse(radioButton1, radioButton2, radioButton3)} {locationResponse(location)}</h2>
            <h3>The positive feedback you have to give us:</h3><p>{feedback1}</p>
            <h3>You think we can improve on the following:</h3><p>{feedback2}</p>
        </div>
    )
}

export default Summary;
