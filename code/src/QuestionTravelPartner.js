import React from 'react';


const partnerArray = ['partner', 'BFF', 'cat', 'dog', 'mum', 'dad', 'grandma'];
//Kom ihåg keys när man mappar igenom, vart ska keys in?

const QuestionTravelPartner = ({funcSetPartner}) => {
    return (
        <section className="pick-partner-section">
            <label className="label">Who do you want to travel with?</label>
            <select
                id="select"
                onChange={event => funcSetPartner(event.target.value)}
                required
            >
                {partnerArray.map((country) => {
                    return (
                        <option value={country}>{country}</option>
                    )
                })
                }
            </select>
        </section>
    )
}

export default QuestionTravelPartner;
