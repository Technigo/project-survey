import React, {useState} from 'react'

const Range = ({decideRange, IselectRange}) => {
    //const [Rng, setRng] = useState(50);
    //console.log(Rng)

    const Satisfaction = () => {

            if (decideRange <= 25) {
                return ( <p className="satisfaction">Bad: {decideRange}</p>)
            } else if (decideRange > 25 && decideRange <50) {
                return ( <p className="satisfaction">Not so good: {decideRange}</p>)
            } else if (decideRange > 50 && decideRange <75) {
                return (<p className="satisfaction">Good: {decideRange}</p>)
            } else if (decideRange > 75 ) 
            { return (<p className="satisfaction">Very good: {decideRange}</p>)
            }
    }

    return (

        
        <div className="range-container">
            <label className="range">
            <p>How was your experience of our webpage?</p>
            <input 
            name="Satisfaction rate"
            type="range" 
            min="1" 
            max="100" 
            value={decideRange} //{Rng}
            onChange={e => IselectRange(e)} // tog bort .value
            className="slider" />
            <div>
            {Satisfaction()}
            </div>
            </label>
        </div>
    )
}

export default Range