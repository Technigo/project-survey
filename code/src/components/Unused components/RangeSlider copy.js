import React, {useState} from 'react'

const Range = () => {
    const [Rng, setRng] = useState(50);

    const Satisfaction = () => {

            if (Rng <= 25) {
                return ( <p className="satisfaction">Bad: {Rng}</p>)
            } else if (Rng > 25 && Rng <50) {
                return ( <p className="satisfaction">Not so good: {Rng}</p>)
            } else if (Rng > 50 && Rng <75) {
                return (<p className="satisfaction">Good: {Rng}</p>)
            } else if (Rng > 75 ) 
            { return (<p className="satisfaction">Very good: {Rng}</p>)
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
            value={Rng} //{Rng}
            onChange={event => setRng(event.target.value)}
            className="slider" />
            <div>
                {Satisfaction()}
            </div>
            </label>
        </div>
    )
}

export default Range