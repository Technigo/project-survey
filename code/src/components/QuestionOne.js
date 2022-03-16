import React, { useState } from "react";

export const QuestionOne = ({quality, setQuality, step, setStep}) => {

return (
    <>
    <form>
        <select 
        onChange={event => setQuality(event.target.value)}
        value={quality} > 
    <option value="">Select the most importat quality</option>
    <option value="Stress tolerant">Can handle a looot of stress!</option>
    <option value="Loyal">Loyal to the company, man we have sectrets!</option>
    <option value="Flexible">You never know whats coming up, so be flexible please.</option>
    <option value="Responsible">Be responsible, plezz, we can't have kidz running aroud!</option>
    </select>
    </form>
    <button onClick={() => setStep(step + 1)}>Next question</button>
    </>
)

}