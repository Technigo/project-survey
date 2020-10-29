import React, { useState } from 'react';

import Submit from './Submit';

export const Survey = () => {
const [showSummary, setShowSummary] = useState(false)
const [location, setLocation] = useState("")
const [radioButton1, setCandyCanes] = useState("")
const [radioButton2, setGingerBreadHouses] = useState("")
const [radioButton3, setChristmasChocolates] = useState("")
const [feedback1, setPositiveFeedback] = useState("")
const [feedback2, setImproveFeedback] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setShowSummary(true)
    }

    return (
        <>
        {!showSummary && ( /* decides what will happen if showSummary is false */
        <form onSubmit= {handleSubmit}>
            <div className="questions" tabIndex="0">
                <div className="dropdown">
                <p>Where did you participate?</p>
                    <select onChange={event => setLocation(event.target.value)} aria-label="Dropdown menu to choose the city where you participated">
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
                    <input type="radio" name="radioButton" value="candyCanes" onChange={event => setCandyCanes(event.target.value)}/> { /*by giving all radio buttons the same name, only one button can be/stay clicked */}
                    Candy Canes
                    </label>
                </div>

                <div className="radio" tabIndex="0">
                    <label htmlFor="gingerBreadHouses">
                    <input type="radio" name="radioButton" value="gingerBreadHouses" onChange={event => setGingerBreadHouses(event.target.value)}/>
                    Ginger Bread Houses
                    </label>
                </div>

                <div className="radio" tabIndex="0">
                    <label htmlFor="christmasChocolates">
                    <input type="radio" name="radioButton" value="christmasChocolates" onChange={event => setChristmasChocolates(event.target.value)}/>
                    Christmas Chocolates
                    </label>
                </div>

            <div className="line"></div>

                <div className="feedback" tabIndex="0">
                <p>Feedback</p>
                    <label htmlFor="positiveFeedback">What did you find most positive about the baking experience?</label>
                    <input id="positiveFeedback" type="text" onChange={event => setPositiveFeedback(event.target.value)}/>
                </div>

                <div className="feedback">
                    <label htmlFor="improveFeedback">Is there something you think we could improve on?</label>
                    <input id="improveFeedback" type="text" onChange={event => setImproveFeedback(event.target.value)}/>
                </div>

            <div className="line"></div>
            </div> 

            <Submit />         
        </form>
        )}
        
        </>
    )
}

export default Survey