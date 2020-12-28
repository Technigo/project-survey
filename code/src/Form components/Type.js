import React from 'react'

export const Type = ({type, setType}) => {

    const typesOfCraftBeer = ["Classic IPA", "Jolly Bitter", "The Belgian crafty", "Top pint Lager", "Devout Stout", "Hoppy vego (Gluten free/Vegan)"];

      /*includes() checks if an array contains a certain element
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
        <fieldset className="container" tabIndex="0">
            <legend>Which of the Craft Beer Co. products are your favourite?</legend>
            <div className="checkbox-row">
                {typesOfCraftBeer.map((kinds) => (
                <label className="checkbox-container" key={kinds}> 
                    <input
                        id="beerTypes"
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
    );
};