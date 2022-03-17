import React, {useState} from 'react'

export const QuestionFour = ({motherhood,setMotherhood, step, setStep}) => {
    
    return (
        <div className='main'>
        <div className="form-container">
        <form >
            <label>
            <h3>Kids, haa?</h3>
            <p>What about if your new co-worker have kids? Can you see all the benefits with planing, structuring, doing multiple things at the same time, the productiveness that brings, or do you just see snot snot snot? So, what do you think, can parenthood be good thing when it comes to work? </p>
            <p> Shine bright like a dimond!
            <input type="checkbox"
            checked={motherhood} 
            onChange={event => setMotherhood(event.target.checked)} 
            /> </p> 
           <p>Naa.. Alway late and home with sick kids.
            <input type="checkbox" /> </p>
            </label>
        </form>
          <button className="button" onClick={() => setStep(step + 1)}><span>NEXT </span></button>
          </div>
          </div>
    );
    
    };
