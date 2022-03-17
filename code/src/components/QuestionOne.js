import React, { useState } from "react";

export const QuestionOne = ({quality, setQuality, step, setStep}) => {

return (
    <div className="main">
    <div className="form-container">
    <h1>Who will be your new co-worker?</h1>
    <p>You better think twice before you hire someone, cuz with Swedish laws, you stack to them for a really long time if you choose the wrong person! Or, just just take this test, and see who will fit you company!</p>
    <p>(And yes! This is a very.. not so much PK-survay...!)</p>
    <form> 
        <select className="form"
        onChange={event => setQuality(event.target.value)}
        value={quality} > 
    <option value="">What's the most importat quality?</option>
    <option value="Stress tolerant">Can handle a looot of stress!</option>
    <option value="Loyal">Loyal to the company, man we have sectrets!</option>
    <option value="Flexible">You never know whats coming up, so be flexible please.</option>
    <option value="Responsible">Be responsible, plezz, we can't have kidz running aroud!</option>
    </select>
    </form>
    <button className="button" onClick={() => setStep(step + 1)}>NEXT</button>
    </div>
    </div>
)

}