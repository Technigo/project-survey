import React, {useState} from 'react'

export const QuestionFour = ({motherhood,setMotherhood, step, setStep}) => {
    
    return (
        <>
        <form>
            <label>
            So, motherhood?
            <input type="checkbox"
            checked={motherhood}
            onChange={event => setMotherhood(event.target.checked)}
            />
            </label>
        </form>
          <button onClick={() => setStep(step + 1)}>Go to summary</button>
          </>
    );
    
    };