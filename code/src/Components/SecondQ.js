import React from 'react'

const SecondQuestion = ({ setAmountOfBands, arrayOfBandNumbers, nextSection, backSection }) => {
    
    return (
        <article>
            <div className="container">
                <h3>How many different bands do you listen to in one week?</h3>
                {arrayOfBandNumbers.map(amountOfBands => (
                    <label key={amountOfBands}>
                        <input type="radio" 
                            name="age" 
                            onChange={event =>setAmountOfBands(event.target.value)} 
                            defaultChecked={arrayOfBandNumbers === amountOfBands} 
                            value={amountOfBands}
                        />
                        {amountOfBands}
                    </label>
                    ))}

                    <button className="next-btn"
                    onClick= {nextSection}
                    >
                    Next question</button>

                    <button className="back-btn" 
                    onClick= {backSection}
                    >
                    Back question</button>

                </div>
            </article>
        
    )

}

export default SecondQuestion