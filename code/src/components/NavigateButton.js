// import React from "react"

// const GoForwardButton = (props) => {
//     const { section, setSection, text } = props

//     const handleNext = () => {
//         if (section < 7) {
//             setSection(section + 1)
//         }
//     }

//     return (
//         <button onClick={handleNext}>{text}</button>
//     )
// }

// export default GoForwardButton

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
        <button onClick={handleClick}>{text}</button>
    )
}

export default NavigateButton