import React from 'react';


const countriesArray = ['France', 'Ireland', 'Sweden', 'Norway', 'Albania', 'Greece', 'Italy'];
//Kom ihåg keys när man mappar igenom, vart ska keys in?

const QuestionCountry = ({funcSetPlace}) => {
    return (
        <section className="pick-place-section">
            <label className="label">Where do you want to go?</label>
            <div className="radio-wrapper">
                {countriesArray.map((partner) => {
                return (
                    <div className="radio-choice-wrapper">
                        <label className="choice">{partner}</label>
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
            </div>
        </section>
    )
}
export default QuestionCountry;
