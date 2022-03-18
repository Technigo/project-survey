import React from 'react'

const ThirdAndFourthQuestion = ({setBands, bandOptions, nextSection, backSection, musicType, onCheckboxChange}) => {
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
                        <p>What type of music do you generally listen to?</p>
                    <label htmlFor="thegoodkind" key="thegoodkind">The good kind
                        <input type="checkbox" 
                        name="thegoodkind" 
                        checked={musicType.includes('the good kind ')}
                        onChange={() =>onCheckboxChange('the good kind ')}/>
                    </label>

                    <label htmlFor="pop" key="pop">Pop
                        <input type="checkbox" 
                        name="pop"
                        checked={musicType.includes('pop ')}
                        onChange={() => onCheckboxChange('pop ')}/>
                    </label>

                    <label htmlFor="electronic" key="electronic">Electronic
                        <input type="checkbox" 
                        name="electronic"
                        checked={musicType.includes('electronic ')}
                        onChange={() => onCheckboxChange('electronic ')}/>
                    </label>
                </div>
            
                <div className="btn-group">
                    <button className="back-btn"
                    onClick= {backSection}
                    >
                    Go back</button>


                    <button className="next-btn"
                    onClick= {nextSection}>
                    Buy tickets
                    </button>
                </div>
            </div>

        </article>
    )
}

export default ThirdAndFourthQuestion