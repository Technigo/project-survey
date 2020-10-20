import React, { useState } from 'react'

const Select = () => {
    const [question, setQuestion] = useState('')
    return (
        <form>
            <select
                onChange={(event) => setQuestion(event.target.value)}
                value={question}
            >
                <option value="">Select Question</option>
                <option value="Alt 1">Alt 1</option>
                <option value="Alt 2">Alt 2</option>
                <option value="Alt 3">Alt 3</option>
                <option value="Alt 4">Alt 4</option>

            </select>
        </form>
    )

}

export default Select