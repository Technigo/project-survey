import React from 'react'


const FourthQuestion = ({spellInput, onSpellInputChange, onStepChange}) => {
    return (
        <section className="questionWrapper">
        <div className="question">
            <form>
                <h2>Which is your favourite spell?</h2>
                <div className="radioGroup">
                <label className="spells">
                    <input 
                    type="radio"
                    name="spells"
                    value="Lumos"
                    onChange = {onSpellInputChange}
                    checked = {spellInput==="Lumos"}
                    />
                    Lumos
                    </label>
                    <label className="spells">
                    <input 
                    type="radio"
                    name="spells"
                    value="Wingardium Leviosa"
                    onChange = {onSpellInputChange}
                    checked = {spellInput==="Wingardium Leviosa"}
                    />
                    Wingardium Leviosa 
                    </label>
                    <label className="spells">
                    <input 
                    type="radio"
                    name="spells"
                    value="Expecto Patronum"
                    onChange = {onSpellInputChange}
                    checked = {spellInput==="Expecto Patronum"}
                    />
                    Expecto Patronum
                    </label>
                    <label className="spells">
                    <input 
                    type="radio"
                    name="spells"
                    value="Avada Kedavra"
                    onChange = {onSpellInputChange}
                    checked = {spellInput==="Avada Kedavra"}
                    />
                    Avada Kedavra
                    </label>
                    </div>

                    <button className="btn" onClick={onStepChange}>Next Question</button>            

                
            </form>
        </div>
        </section>
    )}

export default FourthQuestion