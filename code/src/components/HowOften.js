import React from 'react'

const HowOften = ({nextPage, backPage, amountOfEmail, onAmountOfEmailChange}) => {

    return (

        <div>
        
        <p>How often would you like to recieve the newsletter?</p>
        
        <div>
        <label htmlFor="amountOfEmail" className="descriptive-text">
            You can always change later.
        </label> 

        <select
            id="amountOfEmail"
            value={amountOfEmail}
            onChange={onAmountOfEmailChange}>

            <option value="">Select:</option>
            <option value="Once a week">Once a week</option>
            <option value="Every other week">Every other week</option>
            <option value="Once a month">Once a month</option>
            <option value="Every 3 months">Every 3 months</option>

        </select>

        </div>
        <button className="btn" onClick={backPage}>
            <span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>

        <button className="btn" type="submit" onClick={nextPage}>
                    Next question!</button>
    </div>


    )

 
}



export default HowOften