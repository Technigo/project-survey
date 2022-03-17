import React from 'react'

const ThirdAndFourthQuestion = ({setBands, bandOptions, nextSection, backSection, shirt, setShirt}) => {
    return (

        <article>
            <div>
                <label htmlFor="bands">Which band to you want to see?</label>
                    <select name="bands"
                        onChange={event =>setBands(event.target.value)}>
                    {bandOptions.map(band => (
                        <option
                            value={band}>
                            {band}
                        </option>
                    
                        ))}
                    </select>
            
                <label htmlFor="yes">Yes
                    <input type="checkbox" 
                    name="yes" 
                    value="yes"
                    defaultChecked="yes"
                    onChange={event =>setShirt(event.target.value)}/>
                </label>

                <label htmlFor="t-shirt">No
                    <input type="checkbox" 
                    name="no" 
                    value="no"
                    defaultChecked="No"
                    onChange={event =>setShirt(event.target.value)}/>
                </label>
            </div>

            <button className="back-btn"
            onClick= {backSection}
            >
            Back question</button>


            <button className="buy-btn"
            onClick= {nextSection}>
            Buy tickets
            </button>


        </article>
    )
}

export default ThirdAndFourthQuestion