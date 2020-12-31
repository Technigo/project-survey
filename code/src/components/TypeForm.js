import React, { useState, useEffect, useRef } from 'react';
import ReactTooltip from 'react-tooltip';

import { PriceForm } from './PriceForm';

export const TypeForm = ({ name, age }) => {

    const typesOfCraftBeer = ["Classic IPA", "Jolly Bitter", "The Belgian crafty", "Top pint Lager", "Devout Stout", "Hoppy vego (Gluten free/Vegan)"];

    const [ type, setType ] = useState([]);
    const [ nextQuestion, setNextQuestion ] = useState(false);
    const [ firstRender, setFirstRender ] = useState(true);
    const errorMessage = useRef(null);

    const handleSubmit = event => {
        if (type.length < 1) {
            ReactTooltip.show(errorMessage.current);
            event.preventDefault();
        } else {
            event.preventDefault();
            setNextQuestion(true);
        }
    };

    const legendToBeFocused = useRef(null);

    useEffect(() => {
        if (firstRender) {
            legendToBeFocused.current.focus();
            setFirstRender(false);
        }
    }, [firstRender]);

    /*
    includes() checks if an array contains a certain element
    filter() creates an array filled with all elements that pass a test implemented by the function
    ... spread operator - Allows for array elements to be made individual and spead out in the array.
    ? if : else

    Function onTypeChange checks if type variable contains whatever is in the kinds argument which is defined in the Type.js.
    if true -> then setType function will create an array in the type variable and not include those that are in the typeValue function
    else -> then setType will spread out all array elements in the type variable and add whatever values that are in the typeValue into the type array. 
    */
    const onTypeChange = kinds => {
        type.includes(kinds)
        ? setType ( type.filter(item => item !== kinds) ) 
        : setType( [...type, kinds] );
      };

    /* Mapping through the typesOfCraftBeer array to create a checkbox for each of the array elements. Saying if a checkbox is checked and includes the different elements of the array then the onChange will implement the onTypeChange function defined at the top of the page */
    return ( 
        <>
            {!nextQuestion ? (
                <form onSubmit={handleSubmit} className="form-container">
                <fieldset className="container">
                    <legend 
                        tabIndex="0" 
                        ref={legendToBeFocused} 
                        aria-label="Please tab and select the Craft Beer Company products you like the most and use the space bar and tab to select. Then press enter to go to the next question.">
                            Which of the Craft Beer Co. products are your favourite?
                    </legend>
                    <div 
                        className="checkbox-row" 
                        ref={errorMessage} 
                        data-tip="Please select at least one type of beer">
                    <ReactTooltip backgroundColor="rgb(11, 77, 149)" class="tooltip" />
                        {typesOfCraftBeer.map((kinds) => (
                        <label 
                            className="checkbox-container"
                            htmlFor={kinds} 
                            key={kinds}> 
                            <input
                                id={kinds}
                                name="beerTypes"
                                type="checkbox" 
                                aria-label={kinds}
                                checked={type.includes(kinds)} 
                                onChange={() => onTypeChange(kinds)}
                            />              
                            {kinds}
                            <span className="custom-checkbox"></span>                         
                        </label>
                        ))}
                    </div>
                </fieldset>
                <button 
                    type="submit" 
                    className="button yes-button" 
                    aria-label="Press the button to go to the next question">
                        NEXT QUESTION
                </button>
            </form>
            ):(
                <PriceForm name={name} age={age} type={type}/>
            )}
        </>
    );
};