import React from 'react'

const ThirdQuestion = ({ buyInput, onBuyInputChange, onStepChange }) => {

return (
    <section>
    <h2> Where to buy your bike?</h2>
    <form>
      
    <div className="radio-button">
    <label>
        
        <input
        value={"online"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === "online"}
        />
        online       
        </label>

        <label>
        <input
        value={"second hand"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === "second hand"}
        />
        second hand
        </label>

        <label>
        <input
        value={"in a bike shop"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === "in a bike shop"}
        />
        in a bike shop
        </label>

        <button 
        className='radio-submit-button'
        onClick={onStepChange}
        >Almost there!

        </button>
        </div>
        </form>  
</section>
)
}

export default ThirdQuestion;