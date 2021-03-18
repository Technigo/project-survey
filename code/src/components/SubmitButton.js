import React from "react"

const SubmitButton = (props) => {
    const { setRenderSummary, isComplete } = props

    const handleSubmit = () => {
        setRenderSummary(isComplete())
    }

    if (isComplete()) {
        return (
            <button onClick={handleSubmit}>
                {props.text}
            </button>
        )
    } else {
        return null
    }

    // return (        
    //     <button onClick={handleSubmit} disabled={!isComplete()}>
    //         {props.text}
    //     </button>
    // )
}

export default SubmitButton