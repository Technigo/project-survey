import React from "react"

const SubmitButton = (props) => {
    const { renderSummary, setRenderSummary, setSection } = props

    const handleSubmit = () => {
        setRenderSummary(!renderSummary)
        setSection(0)
    }

    return (
        <button onClick={handleSubmit}>{props.text}</button>
    )
}

export default SubmitButton