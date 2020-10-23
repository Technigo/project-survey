import React from 'react'

export const Summary = ({age, type, price, special, name}) => {

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
        <>       
            <h3>Thanks for taking part in our survey! You submitted:</h3>
                <div>
                    <h3>Your name: </h3>
                    <p>{name}</p>
                    <h3>Age range: </h3>
                    <p>{age}</p>
                    <h3>{sentance}</h3>
                    <p>{arrayToString(type)}</p>            
                    <h3>Your desired price range is: </h3>
                    <p>{price}</p>
                    <h3>Craft Beer Co. is No.1 to you because: </h3>
                    <p>{special}</p>
                </div> 

        </>
    );
};