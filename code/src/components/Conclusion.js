import React from 'react'

const Conclusion = ({nameInput, selectOption, radioInput, radioInput2, onStepBackChange}) => {
return (
    <section className="section" id="summery">
        <div className="intro-text">
            <h2>Thank you {nameInput} for participating!</h2>
            <h4>Here is your result, it will help us make a descion on your and the planet Earth's future. </h4>
        </div>
        <div className="summery-list'">
            <div className="summery-list-item">
            <p>You use the planet <b>{selectOption}</b>. 
            That's why when you travel you go <b>{radioInput}</b>,  
            and if you could give the planet a new feature it would be <b>{radioInput2}</b>.</p>
            </div>
         </div>

         <button type="submit" onClick={onStepBackChange} href="#two" className="btn">Go back</button>

    </section>
)
}

export default Conclusion