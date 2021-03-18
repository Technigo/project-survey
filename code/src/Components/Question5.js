import React, { useState } from 'react'

const Question5 = () => {
    const [changeAboutApp, setChangeAboutApp] = useState('')

    return (
        <label className="question">
            5. What would you change about that website or app? What improvements would you make? E.g., check prices, book a flight, check-in, etc...  
            <input className="input-field"
                type='text'
                value={changeAboutApp}
                onChange={event => setChangeAboutApp(event.target.value)}
            />
        </label>
    ) 
}

export default Question5