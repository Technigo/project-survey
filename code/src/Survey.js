import React, { useState } from 'react';

import Submit from './Submit';

export const Survey = () => {
const [showSummary, setShowSummary] =
useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setShowSummary(true)
    }

    return (
        <form onSubmit= {handleSubmit}>
            <div className="questions" tabIndex="0">
                <div className="dropdown">
                <p>Where did you participate?</p>
                    <select aria-label="Dropdown menu to choose the city where you participated">
                    <option value="">Choose city...</option>
                    <option value="gothenburg">Gothenburg</option>
                    <option value="stockholm">Stockholm</option>
                    <option value="umea">Umea</option>
                    </select>
                </div>

            <div className="line"></div>
                
                <div className="radio" tabIndex="0">
                <p>What baking experience did you participate in?</p>
                    <label htmlFor="candyCanes">
                    <input type="radio" name="radioButton" value="candyCanes" /> { /*by giving all radio buttons the same name, only one button can be/stay clicked */}
                    Candy Canes
                    </label>
                </div>

                <div className="radio" tabIndex="0">
                    <label htmlFor="gingerBreadHouses">
                    <input type="radio" name="radioButton" value="gingerBreadHouses" />
                    Ginger Bread Houses
                    </label>
                </div>

                <div className="radio" tabIndex="0">
                    <label htmlFor="christmasChocolates">
                    <input type="radio" name="radioButton" value="christmasChocolates"/>
                    Christmas Chocolates
                    </label>
                </div>

            <div className="line"></div>

                <div className="feedback" tabIndex="0">
                <p>Feedback</p>
                    <label htmlFor="positiveFeedback">What did you find most positive about the baking experience?</label>
                    <input id="positiveFeedback" type="text" />
                </div>

                <div className="feedback">
                    <label htmlFor="improveFeedback">Is there something you think we could improve on?</label>
                    <input id="improveFeedback" type="text" />
                </div>

            <div className="line"></div>
            </div>

            <Submit />
        </form>
    )
}

export default Survey