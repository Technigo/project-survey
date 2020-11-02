import React from 'react';
import Summary from './Summary';

// all states
export const Survey = () => { 
const [showSummary, setShowSummary] = useState(false)
const [location, setLocation] = useState("")
const [radioButton1, setCandyCanes] = useState("")
const [radioButton2, setGingerBreadHouses] = useState("")
const [radioButton3, setChristmasChocolates] = useState("")
const [feedback1, setPositiveFeedback] = useState("")
const [feedback2, setImproveFeedback] = useState("")

// display summary when the questions has been answered and submitted
const handleSubmit = (event) => {
    setShowSummary(true)
}

// what to display in the summary
if (showSummary === true) {
    return (
        <Summary 
        location={location}
        radioButton1={radioButton1}
        radioButton2={radioButton2}
        radioButton3={radioButton3}
        feedback1={feedback1}
        feedback2={feedback2}
        />
    )
}

return (
    <>
    {!showSummary && ( // the form will be displayed when no questions has been answered and submitted (when showSummary = false)
    <form onSubmit= {handleSubmit}>
        <div className="questions" tabIndex="0">
            <div className="dropdown">
            <h3>Where did you participate?</h3>
                <select value={location} onChange={event => setLocation(event.target.value)} aria-label="Dropdown menu to choose the city where you participated">
                <option value="">Choose city...</option>
                <option value="gothenburg">Gothenburg</option>
                <option value="stockholm">Stockholm</option>
                <option value="umea">Umea</option>
                </select>
            </div>

        <div className="line"></div>
                
            <div className="radio" tabIndex="0">
            <h3>What baking experience did you participate in?</h3>
                <label htmlFor="candyCanes">
                <input
                type="radio"
                value="candyCanes" 
                name="radioButton"  //by giving all radio buttons the same name, only one button can be/stay clicked at once
                onChange={event => setCandyCanes(event.target.value)}
                checked={radioButton1 === 'candyCanes'}/>
                Candy Canes
                </label>
            </div>

            <div className="radio" tabIndex="0">
                <label htmlFor="gingerBreadHouses">
                <input 
                type="radio"
                value="gingerBreadHouses" 
                name="radioButton"
                onChange={event => setGingerBreadHouses(event.target.value)}
                checked={radioButton2 === 'gingerBreadHouses'}/>
                Ginger Bread Houses
                </label>
            </div>

            <div className="radio" tabIndex="0">
                <label htmlFor="christmasChocolates">
                <input
                type="radio"
                value="christmasChocolates"
                name="radioButton"
                onChange={event => setChristmasChocolates(event.target.value)}
                checked={radioButton3 === 'christmasChocolates'}/>
                Christmas Chocolates
                </label>
            </div>

        <div className="line"></div>
                
            <div className="feedback" tabIndex="0">
            <h3>Feedback</h3>
                <label htmlFor="positiveFeedback">What did you find most positive about the baking experience?</label>
                <input type="text"
                id="positiveFeedback"
                onChange={event => setPositiveFeedback(event.target.value)}/>
            </div>

            <div className="feedback">
                <label htmlFor="improveFeedback">Is there something you think we could improve on?</label>
                <input type="text"
                id="improveFeedback" 
                onChange={event => setImproveFeedback(event.target.value)}/>
            </div>

        <div className="line"></div>  
        </div>

            <div className="submitButton" tabIndex="0">
            <button type="submit" onClick={(event) => handleSubmit()} value="Submit"> Send your answer </button>
    </div>      
        </form>
        )} 
        </>
    )
}

export default Survey;