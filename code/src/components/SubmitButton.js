import React from "react"

const SubmitButton = (props) => {
    const { setRenderSummary, isComplete } = props

    const handleSubmit = () => {
        setRenderSummary(isComplete())
    }

    if (isComplete()) {
        return (
            <button onClick={handleSubmit}>
                Submit
            </button>
        )
    }
    else {
        return (
            <button onClick={handleSubmit} disabled>
                Submit
            </button>
        )
    }
}

export default SubmitButton