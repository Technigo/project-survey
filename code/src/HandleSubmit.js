import React from "react"


export const handleSubmit = (props) => {
    const { event, section, setSection } = props;
    event.preventDefault();
    setSection(section + 1)
}