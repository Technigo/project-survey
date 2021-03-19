import React from "react"

const NavigateButton = (props) => {
    const { source, goNext, section, setSection } = props

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
                src={source}
                className="arrow-icon"
                alt="arrow icon"
            />
        </button>
    )
}

export default NavigateButton