import React from 'react'

const QuestionThree = ({ pet, setPet }) => {

    const onPetChange = (event) => {
        setPet(event.target.value)
    }

    return (
        <>
            <section>
                <label htmlFor="pet"></label>
                <select
                    id="pet"
                    value={pet}
                    name="pet"
                    onChange={onPetChange}>

                    <option disabled></option>
                    <option>dog</option>
                    <option>cat</option>
                    <option>rat</option>
                    <option>fish</option>
                    <option>dragon</option>
                </select>
            </section>
        </>
    )

}

export default QuestionThree;