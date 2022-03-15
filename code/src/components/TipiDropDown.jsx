import React from 'react'

const TipiDropDown = (props) => {
    return (
        <div className="page-container">
        <h2>Personality Inventory</h2>
        <p>Here are a number of personality traits that may or may not apply to you. Please select a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span></p> 
        <br />
        <p>You should rate the extent to which <em>the pair</em> of traits applies to you, <span className="underline">even if one characteristic applies more strongly than the other.</span></p>
        <br />
        <h3>I see myself as:</h3>

        <div className="grid">

            <div className="column-1">
            <label htmlFor="tipi1">Extraverted, enthusiastic.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi1" name="tipi1" onChange={event => props.q1Question(event.target.value)} value={props.q1Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Disagree strongly</option>
                <option value="2">2 - Disagree moderately</option>
                <option value="3">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="5">5 - Agree a little</option>
                <option value="6">6 - Agree moderately</option>
                <option value="7">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi2">Critical, quarrelsome.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi2" name="tipi2" onChange={event => props.q2Question(event.target.value)} value={props.q2Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="7">1 - Disagree strongly</option>
                <option value="6">2 - Disagree moderately</option>
                <option value="5">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="3">5 - Agree a little</option>
                <option value="2">6 - Agree moderately</option>
                <option value="1">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi3">Dependable, self-disciplined.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi3" name="tipi3" onChange={event => props.q3Question(event.target.value)} value={props.q3Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Disagree strongly</option>
                <option value="2">2 - Disagree moderately</option>
                <option value="3">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="5">5 - Agree a little</option>
                <option value="6">6 - Agree moderately</option>
                <option value="7">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi4">Anxious, easily upset.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi4" name="tipi4" onChange={event => props.q4Question(event.target.value)} value={props.q4Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="7">1 - Disagree strongly</option>
                <option value="6">2 - Disagree moderately</option>
                <option value="5">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="3">5 - Agree a little</option>
                <option value="2">6 - Agree moderately</option>
                <option value="1">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi5">Open to new experiences, complex.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi5" name="tipi5" onChange={event => props.q5Question(event.target.value)} value={props.q5Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Disagree strongly</option>
                <option value="2">2 - Disagree moderately</option>
                <option value="3">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="5">5 - Agree a little</option>
                <option value="6">6 - Agree moderately</option>
                <option value="7">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi6">Reserved, quiet.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi6" name="tipi6" onChange={event => props.q6Question(event.target.value)} value={props.q6Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="7">1 - Disagree strongly</option>
                <option value="6">2 - Disagree moderately</option>
                <option value="5">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="3">5 - Agree a little</option>
                <option value="2">6 - Agree moderately</option>
                <option value="1">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi7">Sympathetic, warm.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi7" name="tipi7" onChange={event => props.q7Question(event.target.value)} value={props.q7Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Disagree strongly</option>
                <option value="2">2 - Disagree moderately</option>
                <option value="3">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="5">5 - Agree a little</option>
                <option value="6">6 - Agree moderately</option>
                <option value="7">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi8">Disorganized, careless.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi8" name="tipi8" onChange={event => props.q8Question(event.target.value)} value={props.q8Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="7">1 - Disagree strongly</option>
                <option value="6">2 - Disagree moderately</option>
                <option value="5">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="3">5 - Agree a little</option>
                <option value="2">6 - Agree moderately</option>
                <option value="1">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi9">Calm, emotionally stable.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi9" name="tipi9" onChange={event => props.q9Question(event.target.value)} value={props.q9Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Disagree strongly</option>
                <option value="2">2 - Disagree moderately</option>
                <option value="3">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="5">5 - Agree a little</option>
                <option value="6">6 - Agree moderately</option>
                <option value="7">7 - Agree strongly</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tipi10">Conventional, uncreative.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tipi10" name="tipi10" onChange={event => props.q10Question(event.target.value)} value={props.q10Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="7">1 - Disagree strongly</option>
                <option value="6">2 - Disagree moderately</option>
                <option value="5">3 - Disagree a little</option>
                <option value="4">4 - Neither agree nor disagree</option>
                <option value="3">5 - Agree a little</option>
                <option value="2">6 - Agree moderately</option>
                <option value="1">7 - Agree strongly</option>
            </select>
            </div>

        </div>
        </div>
        
    )
}

export default TipiDropDown