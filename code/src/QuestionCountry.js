import React from 'react';


const countriesArray = ['France', 'Ireland', 'Sweden', 'Norway', 'Albania', 'Greece', 'Italy'];
//Kom ihåg keys när man mappar igenom, vart ska keys in?

const QuestionCountry = ({funcSetPlace}) => {
    return (
        <section className="pick-place-section">
            <p>Where do you want to go?</p>

            {countriesArray.map((partner) => {
                return (
                    <div>
                        <label>{partner}</label>
                        <input
                            type="radio"
                            id={partner}
                            value={partner}
                            name="travel-partner"
                            onChange={event => funcSetPlace(event.target.value)}
                        ></input>
                    </div>
                )
            })}
        </section>
    )
}
export default QuestionCountry;
