import React, {useState} from 'react'

export const QuestionFour = ({motherhood,setMotherhood, step, setStep}) => {
    
    return (
        <div className="form-container">
        <form >
            <label>
            <p>What about if your new co-worker have kids? Can you see all the benefits with planing, structuring, doing multiple things at the same time, productiveness that brings, or do you just se snot snot snot? </p>
            So, motherhood, is that a good thing?
            <input type="checkbox"
            checked={motherhood} 
            onChange={event => setMotherhood(event.target.checked)}
            />
            </label>
        </form>
          <button className="button" onClick={() => setStep(step + 1)}>Go to summary</button>
          </div>
    );
    
    };