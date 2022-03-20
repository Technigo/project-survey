import React from 'react'

const ThirdQuestion = ({setBands, bandOptions, nextSection, backSection}) => {
    return (

        <article>
                <div className="text-group">
                    <h2>Choose your favourite out of these five bands</h2>
                    
                    <label htmlFor="bands" key="bands">Bands
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
            
                <div className="btn-group">
                    <button className="next-btn"
                    onClick= {nextSection}>
                    Next question
                    </button>

                    <button className="back-btn"
                    onClick= {backSection}
                    >
                    Go back</button>
                </div>

        </article>
    )
}

export default ThirdQuestion