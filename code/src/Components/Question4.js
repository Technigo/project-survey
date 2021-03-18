import React, { useState } from 'react'

const Question4 = () => {
    const [likeAboutApp, setLikeAboutApp] = useState('')

    return (
        <label className="question">
            4.  What did you like about the booking website or app? 
            <input className="input-field"
                type='text'
                value={likeAboutApp}
                onChange={event => setLikeAboutApp(event.target.value)}
            />
        </label>
    ) 
}

export default Question4