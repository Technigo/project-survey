import React from 'react'

const Select = props => {
    const {setQuestion, question} = props

    return (
        <div>
            <h3>Question for select menu</h3>
            <label htmlFor="slectquestion"></label>
                <select
                    onChange={(event) => setQuestion(event.target.value)}
                    value={question}
                >
                    <option value="">Select Alternative</option>
                    <option value="Alt 1">Alt 1</option>
                    <option value="Alt 2">Alt 2</option>
                    <option value="Alt 3">Alt 3</option>
                    <option value="Alt 4">Alt 4</option>
                </select>
        </div>
    )

}

export default Select