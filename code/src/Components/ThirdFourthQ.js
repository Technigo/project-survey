import React from 'react'

const ThirdAndFourthQuestion = ({setBands, bandOptions, nextSection, backSection, shirtColor, onCheckboxChange}) => {
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
            
                <label htmlFor="blue ">Blue
                    <input type="checkbox" 
                    name="blue " 
                    checked={shirtColor.includes('blue ')}
                    onChange={() =>onCheckboxChange('blue ')}/>
                </label>

                <label htmlFor="black ">Black
                    <input type="checkbox" 
                    name="black "
                    checked={shirtColor.includes('black ')}
                    onChange={() => onCheckboxChange('black ')}/>
                </label>

                <label htmlFor="white ">White
                    <input type="checkbox" 
                    name="white "
                    checked={shirtColor.includes('white ')}
                    onChange={() => onCheckboxChange('white ')}/>
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