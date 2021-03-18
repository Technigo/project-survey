import React, { useState } from 'react'

const Question7 = () => {
    const [likeToShare, setLikeToShare] = useState('')

    return (
        <label className="question">
            10. What else do you want to share about your booking experience? 
            <input className="input-field"
                type='text'
                value={likeToShare}
                onChange={event => setLikeToShare(event.target.value)}
            />
        </label>
    ) 
}

export default Question7