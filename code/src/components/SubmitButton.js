import React from "react"

const SubmitButton = (props) => {
    const { section, setRenderSummary, isComplete } = props

    const handleSubmit = () => {
        setRenderSummary(isComplete())
    }

    if (isComplete()) {
        return (
            <button onClick={handleSubmit}>
                Submit
            </button>
        )
    } else if (section === 7) {
        return (
            <p className="validation-warning">Go back & check if you've filled in everything!</p>
        )
    }
    else {
        return null
    }
}

export default SubmitButton