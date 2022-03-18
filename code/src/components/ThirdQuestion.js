import React from 'react'

const ThirdQuestion = ({ buyInput, onBuyInputChange, onStepChange }) => {

return (
    <section>
        <div className="radio-button">
        <label>
        <p> Where do you buy your bike?</p>
        <input
        value={"online"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === "Only online"}
        />
        online 
        </label>

        <label>
        <input
        value={"second hand"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === "Always second hand"}
        />
        second hand
        </label>

        <label>
        <input
        value={"bikeshop"}
        type="radio"
        onChange={onBuyInputChange} 
        checked={buyInput === "In the local bike shop"}
        />
        local bike shop
        </label>


        </div>
      


<button onClick={onStepChange}Summary></button>
</section>


);
}

export default ThirdQuestion;