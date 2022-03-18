import React from 'react'

const ThirdAndFourthQuestion = ({setBands, bandOptions, nextSection, backSection, shirtColor, onCheckboxChange}) => {
    return (

        <article>
            <div className="container">
                <div className="dropdown">
                    <label htmlFor="bands" key="bands">Choose your favourite out of these five bands</label>
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

                    <div className="checkboxes">
                        <p>What question should I have here?!</p>
                    <label htmlFor="blue" key="blue">Blue
                        <input type="checkbox" 
                        name="blue" 
                        checked={shirtColor.includes('blue ')}
                        onChange={() =>onCheckboxChange('blue ')}/>
                    </label>

                    <label htmlFor="black" key="black">Black
                        <input type="checkbox" 
                        name="black"
                        checked={shirtColor.includes('black ')}
                        onChange={() => onCheckboxChange('black ')}/>
                    </label>

                    <label htmlFor="white" key="white">White
                        <input type="checkbox" 
                        name="white"
                        checked={shirtColor.includes('white ')}
                        onChange={() => onCheckboxChange('white ')}/>
                    </label>
                </div>
            
                <div className="btn-group">
                    <button className="back-btn"
                    onClick= {backSection}
                    >
                    Back question</button>


                    <button className="buy-btn"
                    onClick= {nextSection}>
                    Buy tickets
                    </button>
                </div>
            </div>

        </article>
    )
}

export default ThirdAndFourthQuestion