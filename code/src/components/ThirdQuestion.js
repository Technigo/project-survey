import React from 'react'

const ThirdQuestion = ({ buyInput, onBuyInputChange, onStepChange }) => {

    return (
        <section>
            <form className="App">
                <h2> Where do you buy your bike?</h2>
                <div className="radio-button">
                    <label>
                        
                        <input
                         type="radio" 
                         value={"online"}
                        onChange={onBuyInputChange}
                        checked={buyInput === "online"}   
                        />
                        online
                    </label>
                </div>

                <div className="radio-button">
                    <label>
                        <input 
                        type="radio" 
                        value={"second hand"}
                        onChange={onBuyInputChange}
                        checked={buyInput === "second hand"}
                        />
                        second hand
                    </label>
                </div>

                <div className="radio-button">
                    <label>
                        <input 
                        type="radio" 
                        value={"bike shop"}
                        onChange={onBuyInputChange}
                        checked={buyInput === "bike shop"}
                        />
                        bike shop
                    </label>
                </div>
            </form>

            <button
                className='submit-button'
                onClick={onStepChange}
                disabled={buyInput === ""}
            >NEXT!
            </button>
        </section>
    )
}

export default ThirdQuestion;