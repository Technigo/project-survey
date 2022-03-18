import React from "react";

export const QuestionOne = ({quality, setQuality, step, setStep}) => {

return (
    <div className="main">
    <div className="form-container">
    <h1 tabIndex="0">Who will be your new co-worker?</h1>
    <p tabIndex="0">You better think twice before you hire someone, cuz with Swedish laws, you stack to them forever if you choose the wrong person! Or, just just take this test, and see who will fit you company!</p>
    <p tabIndex="0">(And No, this is not a very PK-survay...!)</p>
    <h3 tabIndex="0">Most inportant quality?</h3>
    <form> 
        <select className="form"
        onChange={event => setQuality(event.target.value)}
        value={quality} > 
    <option value="">What's the most importat quality?</option>
    <option value="Stress tolerant">Can handle a looot of stress! God we are running here..</option>
    <option value="Loyal">Loyalty to the company, man we have sectrets!</option>
    <option value="Flexible">You never know whats coming up, so be flexible plezz.</option>
    <option value="Responsible">Be responsible, we can't have kidz running aroud!</option>
    </select>
    </form>
    <button className="button" onClick={() => setStep(step + 1)}><span>NEXT </span></button>
    </div>
    </div>
)

}