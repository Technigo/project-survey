import React from 'react'

export const Summary = ({name, age, type, price, special, Welcome}) => {

    /* Created a re-useable function which takes an argument. This argument is iterated through by way of the for loop. The iteration is then used in the if else statement to be able append either an "&"" or "," when the length of the array is compared to the index number of the array. This function is then called when we pass the type array in the return statement further down in the jsx area*/
    const arrayToString = (array) => {
        let string = "";
        for (let i = 0; i < array.length; i++) {
            string += array[i];
            if (array.length-1 === i) {
                                
            } else if (array.length-2 === i) {
                string += " & ";
            } else {
                string += ", "
            }  
        }
        return string;
    };

    let sentance ="";
    if (type.length === 1) {
        sentance = "Your favourite Craft Beer Co. product is "
    } else {
        sentance = "Your favourite Craft Beer Co. products are "
    }   

    return (
        <div className="summary-container">
            <div className="header-container" tabIndex="0">
                <h2>Thanks for taking part in our survey!</h2>
                <h2>You submitted:</h2>
            </div>
            <div className="text-container">
                <h3 tabIndex="0">Your name: </h3>
                <p tabIndex="0">{name}</p>
            </div>
            <div className="text-container">
                <h3 tabIndex="0">Age range: </h3>
                <p tabIndex="0">{age}</p>
            </div>
            <div className="text-container">
                <h3 tabIndex="0">{sentance}</h3>
                <p tabIndex="0">{arrayToString(type)}</p> 
            </div>
            <div className="text-container">
                <h3 tabIndex="0">Your desired price range is: </h3>
                <p tabIndex="0">{price}</p>
            </div>
            <div className="text-container">
                <h3 tabIndex="0">Craft Beer Co. is No.1 to you because: </h3>
                <p tabIndex="0">{special}</p>
            </div>
            <div className="button-container">
                <button type="button" className="button yes-button">
                    <a href={Welcome} className="link">BACK TO HOME</a>
                </button>
            </div>
        </div>
    );
};