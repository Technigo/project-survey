import React, { useState } from 'react';

const locationResponse = location => {
    if (location === 'gothenburg') {
        return 'Thank you for visiting our baking experience in Gothenburg.'
    } else if (location === 'stockholm') {
        return 'Thank you for visiting our baking experience in Stockholm.'
    } else if (location === 'umea') {
        return 'Thank you for visiting our baking experience in Umea.'
    }
}
    
const radioButtonResponse = (radioButton1, radioButton2, radioButton3) => {
    if (radioButton1 === 'candyCanes') {
        return 'You participated in the Candy Canes baking experience. Hope you had fun!'
    } else if (radioButton2 === 'gingerBreadHouses') {
        return 'You participated in the Ginger Bread Houses baking experience. Hope you had fun!'
    } else if (radioButton3 === 'christmasChocolates') {
        return 'You participated in the Christmas Chocolates baking experience. Hope you had fun!'
    }
}


const Summary =({location, radioButton1, radioButton2, radioButton3}) => {
    return (
        <div className="summary">
            <p>{locationResponse(location)} {radioButtonResponse(radioButton1, radioButton2, radioButton3)}</p>
        </div>
    )
}

export default Summary;
/* {positiveFeedbackResponse(feedback1)} {improveFeedbackResponse(feedback2)} */ 