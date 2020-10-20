import React, { useState } from 'react'

const questionGroups = [
    "0-5",
    "6-11",
    "12-17"
]

const Radio = () => {
    const [questionGroup, setQuestionGroup] = useState()
    return (
        <div>
            <form>
                Using map instead
                {questionGroups.map(group => (
                    <label key={group}>
                        <input
                        type="radio"
                        value={group}
                        onChange={event => setQuestionGroup(event.target.value)}
                        checked={questionGroup === group}
                        />
                        {group}
                    </label>
                ))}
            </form>
        </div>
    )
}

export default Radio