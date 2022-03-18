import React from 'react'

const TipiDropDown = ({q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer, q7Answer, q8Answer, q9Answer, q10Answer, q1Question, q2Question, q3Question, q4Question, q5Question, q6Question, q7Question, q8Question, q9Question, q10Question, error}) => {

    const tipiArray = [
        {
            text: 'Extraverted, enthusiastic.',
            id: 'tipi1',
            onChange: event => q1Question(Number(event.target.value)),
            value: q1Answer,
            option1: '1',
            option2: '2',
            option3: '3',
            option4: '4',
            option5: '5',
            option6: '6',
            option7: '7'
        },
        {
            text: 'Critical, quarrelsome.',
            id: 'tipi2',
            onChange: event => q2Question(Number(event.target.value)),
            value: q2Answer,
            option1: '7',
            option2: '6',
            option3: '5',
            option4: '4',
            option5: '3',
            option6: '2',
            option7: '1'
        },
        {
            text: 'Dependable, self-disciplined.',
            id: 'tipi3',
            onChange: event => q3Question(Number(event.target.value)),
            value: q3Answer,
            option1: '1',
            option2: '2',
            option3: '3',
            option4: '4',
            option5: '5',
            option6: '6',
            option7: '7'
        },
        {
            text: 'Anxious, easily upset.',
            id: 'tipi4',
            onChange: event => q4Question(Number(event.target.value)),
            value: q4Answer,
            option1: '7',
            option2: '6',
            option3: '5',
            option4: '4',
            option5: '3',
            option6: '2',
            option7: '1'
        },
        {
            text: 'Open to new experiences, complex.',
            id: 'tipi5',
            onChange: event => q5Question(Number(event.target.value)),
            value: q5Answer,
            option1: '1',
            option2: '2',
            option3: '3',
            option4: '4',
            option5: '5',
            option6: '6',
            option7: '7'
        },
        {
            text: 'Reserved, quiet.',
            id: 'tipi6',
            onChange: event => q6Question(Number(event.target.value)),
            value: q6Answer,
            option1: '7',
            option2: '6',
            option3: '5',
            option4: '4',
            option5: '3',
            option6: '2',
            option7: '1'
        },
        {
            text: 'Sympathetic, warm.',
            id: 'tipi7',
            onChange: event => q7Question(Number(event.target.value)),
            value: q7Answer,
            option1: '1',
            option2: '2',
            option3: '3',
            option4: '4',
            option5: '5',
            option6: '6',
            option7: '7'
        },
        {
            text: 'Disorganized, careless.',
            id: 'tipi8',
            onChange: event => q8Question(Number(event.target.value)),
            value: q8Answer,
            option1: '7',
            option2: '6',
            option3: '5',
            option4: '4',
            option5: '3',
            option6: '2',
            option7: '1'
        },
        {
            text: 'Calm, emotionally stable.',
            id: 'tipi9',
            onChange: event => q9Question(Number(event.target.value)),
            value: q9Answer,
            option1: '1',
            option2: '2',
            option3: '3',
            option4: '4',
            option5: '5',
            option6: '6',
            option7: '7'
        },
        {
            text: 'Conventional, uncreative',
            id: 'tipi10',
            onChange: event => q10Question(Number(event.target.value)),
            value: q10Answer,
            option1: '7',
            option2: '6',
            option3: '5',
            option4: '4',
            option5: '3',
            option6: '2',
            option7: '1'
        },
    ]

    return (
        <div className="page-container">
        <h2 className="title">Personality Inventory</h2>
        <p className="explanation">Here are a number of personality traits that may or may not apply to you. Please select a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span></p> 
        <br />
        <p className="explanation">You should rate the extent to which <em>the pair</em> of traits applies to you, <span className="underline">even if one characteristic applies more strongly than the other.</span></p>
        <br />
        <h3>I see myself as:</h3>

        <div className="grid" role="form">

        {tipiArray.map(({ text, id, onChange, value, option1, option2, option3, option4, option5, option6, option7 }) => (
        <React.Fragment key={id}>
        <div className="column-1">
            <label htmlFor={id}>{text}</label>
            </div>
            <div className="column-2 drop-down">
            <select 
                id={id} 
                name={id} 
                onChange={onChange} 
                value={value} 
            >
                <option value="default" disabled hidden>Select option:</option>
                <option value={option1}>1 - Disagree strongly</option>
                <option value={option2}>2 - Disagree moderately</option>
                <option value={option3}>3 - Disagree a little</option>
                <option value={option4}>4 - Neither agree nor disagree</option>
                <option value={option5}>5 - Agree a little</option>
                <option value={option6}>6 - Agree moderately</option>
                <option value={option7}>7 - Agree strongly</option>
            </select>
            </div>
        </React.Fragment>
        ))}

        </div>
        {error !== 'noError' && <p className="error-message">{error}</p>}
        </div>
        
    )
}

export default TipiDropDown