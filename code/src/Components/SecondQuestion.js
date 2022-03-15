import React from 'react'

const SecondQuestion = ({onStepChange, onQualityInputChange, qualityInput}) => {
    return (
        <section className="questionWrapper">
        <div className="question">
            <form>
                <h2>Which of these qualities fits you best?</h2>
                <select
                value={qualityInput}
                onChange={onQualityInputChange}>
                    <option value="">select your personality..</option>
                    <option value="caring">Caring</option>
                    <option value="evil">Evil</option>
                    <option value="funny">Funny</option>
                </select>

                <button className="btn" onClick={onStepChange}>Next Question</button>

            </form>

        </div>
        </section>




    )
}



export default SecondQuestion