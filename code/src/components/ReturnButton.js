import React from "react"

const ReturnButton = (props) => {
    const { setRenderSummary, setSection } = props

    const handleReturn = () => {
        setSection(0)
        setRenderSummary(false)
    }

    return (
        <button onClick={handleReturn}>
            Go back
        </button>
    )
}

export default ReturnButton