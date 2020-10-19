import React from 'react';


const partnerArray = ['partner', 'best friend', 'cat', 'dog', 'mum', 'dad', 'grandma'];
//Kom ihåg keys när man mappar igenom, vart ska keys in?

const QuestionTravelPartner = ({partner, funcSetPartner}) => {
    return (
        <section className="pick-partner-section">
            <label htmlFor="select" className="label">Who do you want to travel with?</label>
            <select
                id="select"
                onChange={event => funcSetPartner(event.target.value)}
                required
            >
                <option key="disabled" value="disabled" disabled>Choose Partner:</option>
                {partnerArray.map((partner) => {
                    return (
                        <option key={partner} value={partner}>{partner}</option>
                    )
                })
                }
            </select>
        </section>
    )
}

export default QuestionTravelPartner;
