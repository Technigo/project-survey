import React from 'react'

const QuestionFour = ({ character, setCharacter }) => {

    const onCharacterChange = (event) => {
        setCharacter(event.target.value)
    }

    return (
        <>
            <section>
                <label htmlFor="character"></label>
                <select
                    id="character"
                    value={character}
                    name="character"
                    onChange={onCharacterChange}>

                    <option disabled></option>
                    <option>sassy</option>
                    <option>passive-agressive</option>
                    <option>needy</option>
                    <option>gentle</option>
                    <option>kind</option>
                </select>
            </section>
        </>
    )

}

export default QuestionFour