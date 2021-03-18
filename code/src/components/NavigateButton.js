import React from "react"

const NavigateButton = (props) => {
    const { section, setSection, goNext, text } = props

    const handleClick = () => {
        if (goNext && section < 7) {
            setSection(section + 1)
        } else if (!goNext && section > 0) {
            setSection(section - 1)
        }
    }

    return (
        <button onClick={handleClick}>
            <img
                src={props.source}
                className="arrow-icon"
            />
        </button>
    )
}

export default NavigateButton