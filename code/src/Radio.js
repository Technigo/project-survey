import React from 'react'
import img from './images/sm.png'

const questionGroups = [
    "0-5",
    "6-11",
    "12-17"
]

const Radio = props => {
    const { setQuestionGroup, questionGroup } = props
    return (
        <div>
            <h3>Question for radio buttons</h3>
            <img
                className="tt"
                alt="south park siter of teletubbies"
                src={img}
            />
            {questionGroups.map(group => (
                <label htmlFor="InputRadio" key={group}>
                    <input
                        type="radio"
                        value={group}
                        onChange={event => setQuestionGroup(event.target.value)}
                        checked={questionGroup === group}
                    />
                    {group}
                </label>
            ))}
        </div>
    )
}

export default Radio