import React from 'react'

const ThirdQuestion = ({ buyInput, onBuyInputChange, onStepChange }) => {

return (
    <section>
    <form>
      
        <div className="radio-button">
        <label>
        <h2> Where to buy your bike?</h2>
        <input
        value={"online only"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === "online only"}
        />
        online only        
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
        value={"bikeshop"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === ""}
        />
        bikeshop
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