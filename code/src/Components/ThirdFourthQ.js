import React from 'react'

const ThirdAndFourthQuestion = ({setBands, bandOptions, nextSection, backSection, musicType, onCheckboxChange}) => {
    return (

        <article>
            <div className="container">
                <div className="text-group">
                    <label htmlFor="bands" key="bands">Choose your favourite out of these five bands
                    </label>
                        <select className="dropdown"
                        name="bands"
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
                        <p>What type of music do you generally listen to?</p>
                    <label htmlFor="thegoodkind" key="thegoodkind">
                        <input className="checkboxes"
                        type="checkbox" 
                        name="thegoodkind" 
                        checked={musicType.includes('the good kind')}
                        onChange={() =>onCheckboxChange('the good kind')}/>
                   The good kind</label>
                </div>

                <div >
                    <label htmlFor="pop" key="pop">
                        <input className="checkboxes"
                        type="checkbox" 
                        name="pop"
                        checked={musicType.includes('pop')}
                        onChange={() => onCheckboxChange('pop')}/>
                    Pop</label>
                </div>

                <div >
                    <label htmlFor="electronic" key="electronic">
                        <input className="checkboxes"
                        type="checkbox" 
                        name="electronic"
                        checked={musicType.includes('electronic')}
                        onChange={() => onCheckboxChange('electronic')}/>
                    Electronic</label>
                </div>
            
                <div className="btn-group">
                    <button className="next-btn"
                    onClick= {nextSection}>
                    Submit answers
                    </button>

                    <button className="back-btn"
                    onClick= {backSection}
                    >
                    Go back</button>
                </div>
            </div>

        </article>
    )
}

export default ThirdAndFourthQuestion