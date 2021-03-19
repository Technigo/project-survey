import React from 'react'

const QuestionTwo = ({ size, setSize }) => {

    const onSizeChange = (event) => {
        setSize(event.target.value)
    }

    return (
        <>
            <section className="dropdown-size">
                <label htmlFor="size"></label>
                <select
                    id="size"
                    value={size}
                    name="size"
                    onChange={onSizeChange}>

                    <option disabled></option>
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                    <option>extra large</option>
                </select>
            </section>
        </>
    )

}

export default QuestionTwo;