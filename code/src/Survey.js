import React, { useState } from 'react';

export const Survey = () => {
const [showSummary, setShowSummary] =
useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setShowSummary(true)
    }
    return (
        <form onSubmit= {handleSubmit}>
            <div className="questions">
                <div className="dropdown">
                <p>Where did you participate?</p>
                    <select>
                    <option value="">Choose city...</option>
                    <option value="gothenburg">Gothenburg</option>
                    <option value="stockholm">Stockholm</option>
                    <option value="umea">Umea</option>
                    </select>
                </div>

            <div className="line"></div>
                
                <div className="radio">
                <p>What baking experience did you participate in?</p>
                    <label htmlFor="candyCanes">
                    <input type="radio" name="radioButton" value="candyCanes" /> {/*by giving all radio buttons the same name, only one button can be clicked */}
                    Candy Canes
                    </label>
                </div>

                <div className="radio">
                    <label htmlFor="gingerBreadHouses">
                    <input type="radio" name="radioButton" value="gingerBreadHouses" />
                    Ginger Bread Houses
                    </label>
                </div>

                <div className="radio">
                    <label htmlFor="christmasChocolates">
                    <input type="radio" name="radioButton" value="christmasChocolates"/>
                    Christmas Chocolates
                    </label>
                </div>

            <div className="line"></div>

                <div className="feedback">
                <p>Feedback</p>
                    <label htmlFor="positiveFeedback">What did you find most positive about the baking experience?</label>
                    <input id="positiveFeedback" type="text" />
                </div>

                <div className="feedback">
                    <label htmlFor="improveFeedback">Is there something you think we could improve on?</label>
                    <input id="improveFeedback" type="text" />
                </div>

            <div className="line"></div>

                <div className="submitButton">
                <button type="submit"> Send your answer </button>
                </div>
            </div>
        </form>
    )
}

export default Survey