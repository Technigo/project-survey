import React from 'react';


const partnerArray = ['partner', 'best friend', 'cat', 'dog', 'mum', 'dad', 'grandma'];

const QuestionTravelPartner = ({partner, funcSetPartner}) => {
    return (
        <section className="pick-partner-section">
            <h2 tabIndex="0">Question 3</h2>
            <label
                htmlFor="select"
                className="label"
            >
                Who do you want to travel with?
            </label>
            <select
                id="select"
                onChange={event => funcSetPartner(event.target.value)}
                required
            >
                <option>Choose travelpartner:</option>
                {partnerArray.map((partner) => {
                    return (
                        <option
                            key={partner}
                            value={partner}
                        >
                            {partner}
                        </option>
                    )
                })
                }
            </select>
        </section>
    )
}

export default QuestionTravelPartner;
