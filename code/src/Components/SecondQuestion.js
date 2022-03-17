import React from 'react'

const SecondQuestion = ({onStepChange, onQualityInputChange, qualityInput}) => {
    return (
        <section className="questionWrapper">
        <div className="question">
            <form>
                <h2>Which character is your favourite?</h2>
                <select
                className="dropdown"
                aria-label="Choose your favourite character"
                value={qualityInput}
                onChange={onQualityInputChange}>
                    <option value="">select your character..</option>
                    <option value="Harry Potter">Harry Potter</option>
                    <option value="Hermione Granger">Hermione Granger</option>
                    <option value="Ron Weasley">Ron Weasley</option>
                    <option value="Voldemort">Voldemort</option>
                    <option value="Luna Lovelace">Luna Lovelace</option>
                    <option value="Draco Malfoy">Draco Malfoy</option>
                </select>

                <button className="btn" onClick={onStepChange}>Next Question</button>

            </form>

        </div>
        </section>




    )
}



export default SecondQuestion