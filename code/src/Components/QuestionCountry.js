import React from 'react';


const countriesArray = ['France', 'Ireland', 'Sweden', 'Norway', 'Albania', 'Greece', 'Italy'];
//Kom ihåg keys när man mappar igenom, vart ska keys in?

const QuestionCountry = ({funcSetPlace}) => {
    return (
        <section className='pick-place-section'>
            <h2 tabIndex='0'>Question 2</h2>
            <label tabIndex='0' className='label'>Where do you want to go?</label>
            <div className='radio-wrapper'>
                {countriesArray.map((place) => {
                return (
                    <div key={place} className='radio-choice-wrapper'>
                        <label htmlFor={place} className="choice">{place}</label>
                        <input
                            type='radio'
                            id={place}
                            value={place}
                            name='place'
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
