import React from 'react'

const ThirdAndFourthQuestion = ({setBands, bandOptions}) => {
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
                </div>
            <div>
                <label htmlFor="t-shirt">Do you want a band T-shirt from your chosen band?
                    <input type="checkbox" 
                    name="yes" 
                    value="yes"
                    onChange={event =>setBands(event.target.value)}/>
                    <input 
                    type="checkbox" 
                    name="no"
                    value="no"
                    onChange={event =>setBands(event.target.value)}
                    />
                </label>
            </div>
            
        </article>
    )
}

export default ThirdAndFourthQuestion