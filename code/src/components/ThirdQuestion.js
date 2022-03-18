import React from 'react'

const Interests = ({setInterest, arrayOfInterests, nextPage, backPage}) => {


    return (

        <div>
            <p>What would you like to read more about?</p>
            <p className="descriptive-text">Pick your favourite! <span role="img" aria-label="girl waving emoji">🙋‍♀️</span></p>


            {arrayOfInterests.map(interest => (

                <div className="radiobuttons">
                <label key={interest}>
                    <input
                    type="radio"
                    name="choice"
                    onChange={event => setInterest(event.target.value)}
                    defaultChecked={arrayOfInterests === interest}
                    value={interest}
                    />
            
                {interest}
                
                </label>
                </div>
            ))
}      


            <button className="btn-special" type="submit" onClick={backPage}> 
        <span role="img" aria-label="back arrow emoji">↩️</span> Go back
        </button>

        <button className="btn-special" type="submit" onClick={nextPage}> Next question!</button>

        </div>



    )


}


export default Interests