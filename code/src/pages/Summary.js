import React, { useRef, useState, useEffect } from 'react'

export const Summary = ({ name, age, type, price, special }) => {

    const [ firstRender, setFirstRender ] = useState(true);

    const sectionToBeFocused = useRef(null);

    useEffect(() => {
        if (firstRender) {
            sectionToBeFocused.current.focus();
            setFirstRender(false);
        }
    }, [firstRender]);

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
        <section tabIndex="0" ref={sectionToBeFocused}>
            <div className="summary-container">
                <div className="header-container">
                    <h2>Thanks for taking part in our survey!</h2>
                    <h2>You submitted:</h2>
                </div>
                <div className="text-container">
                    <h3>Your name: </h3>
                    <p>{name}.</p>
                </div>
                <div className="text-container">
                    <h3>Age range: </h3>
                    <p>{age}.</p>
                </div>
                <div className="text-container">
                    <h3>{sentance}:</h3>
                    <p>{arrayToString(type)}.</p> 
                </div>
                <div className="text-container">
                    <h3>Your desired price range is: </h3>
                    <p>{price}.</p>
                </div>
                <div className="text-container">
                    <h3>Craft Beer Co. is No.1 to you because: </h3>
                    <p>{special}.</p>
                </div>
                <div 
                    className="button-container"                         aria-label="Tab and enter to go back to homepage.">
                    <button 
                        type="button" 
                        className="button yes-button" 
                        onClick={() => window.location.reload()}>
                            BACK TO HOME
                    </button>
                </div>
            </div>
        </section> 
    );
};