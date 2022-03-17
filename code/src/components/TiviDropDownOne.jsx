import React from 'react'

let capital = 'They'
let lower = 'they'
let lower2 = 'their'
let lower3 = 'them'
let s = ''
let are = 'are'
let tries = 'try'
let does = 'do'
// let has = 'have'

const TiviDropDownOne = (props) => {

    if (props.gender === 'Female') {
        capital = 'She'
        lower = 'she'
        lower2 = 'her'
        lower3 = 'her'
        are = 'is'
        tries = 'tries'
        s = 's'
        does = 'does'
        // has = 'has'
    } if (props.gender === 'Male') {
        capital = 'He'
        lower = 'he'
        lower2 = 'his'
        lower3 = 'him'
        are = 'is'
        tries = 'tries'
        s = 's'
        does = 'does'
        // has = 'has'
    } if (props.gender === 'Neither') {
        capital = 'They'
        lower = 'they'
        lower2 = 'their'
        lower3 = 'them'
        are = 'are'
        s = ''
    }

    const tiviOneArray = [
        {
            id: 'tivi1',
            text: `${capital} believe${s} ${lower} should always show respect to ${lower2} parents and to older people. It is important to ${lower3} to be obedient.`,
            onChange: event => props.q1Question(Number(event.target.value)),
            value: props.q1Answer
        },
        {
            id: 'tivi2',
            text: `Religious belief is important to ${lower3}. ${capital} ${tries} hard to do what ${lower2} religion requires.`,
            onChange: event => props.q2Question(Number(event.target.value)),
            value: props.q2Answer
        },
        {
            id: 'tivi3',
            text: `It's very important to ${lower3} to help the people around ${lower3}. ${capital} want${s} to care for their well-being.`,
            onChange: event => props.q3Question(Number(event.target.value)),
            value: props.q3Answer
        },
        {
            id: 'tivi4',
            text: `${capital} think${s} it is important that every person in the world be treated equally. ${capital} believe${s} everyone should have equal opportunities in life.`,
            onChange: event => props.q4Question(Number(event.target.value)),
            value: props.q4Answer
        },
        {
            id: 'tivi5',
            text: `${capital} think${s} it's important to be interested in things. ${capital} like${s} to be curious and to try to understand all sorts of things.`,
            onChange: event => props.q5Question(Number(event.target.value)),
            value: props.q5Answer
        },
        {
            id: 'tivi6',
            text: `${capital} like${s} to take risks. ${capital} ${are} always looking for adventures.`,
            onChange: event => props.q6Question(Number(event.target.value)),
            value: props.q6Answer
        },
        {
            id: 'tivi7',
            text: `${capital} seek${s} every chance ${lower} can to have fun. It is important to ${lower3} to do things that give ${lower3} pleasure.`,
            onChange: event => props.q7Question(Number(event.target.value)),
            value: props.q7Answer
        },
        {
            id: 'tivi8',
            text: `Getting ahead in life is important to ${lower3}. ${capital} strive${s} to do better than others.`,
            onChange: event => props.q8Question(Number(event.target.value)),
            value: props.q8Answer
        },
        {
            id: 'tivi9',
            text: `${capital} always wants to be the one who makes the decisions. ${capital} like${s} to be the leader.`,
            onChange: event => props.q9Question(Number(event.target.value)),
            value: props.q9Answer
        },
        {
            id: 'tivi10',
            text: `It is important to ${lower3} that things be organized and clean. ${capital} really ${does} not like things to be a mess.`,
            onChange: event => props.q10Question(Number(event.target.value)),
            value: props.q10Answer
        },
    ]

    return (
        <div className="page-container">
        <h2>Values Inventory (part 1)</h2>
        <p>Here we briefly describe some people. Please read each description and think about how much each person is or is not like you. Using a 6-point scale from “not like me at all” to “very much like me,” choose how similar the person is to you. </p>
        <div className="grid" type="form">

        {tiviOneArray.map(({ text, id, onChange, value }) => (
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
                    <option value="1">1 - Not like me at all</option>
                    <option value="2">2 - Not like me</option>
                    <option value="3">3 - A little like me</option>
                    <option value="4">4 - Somewhat like me</option>
                    <option value="5">5 - Like me</option>
                    <option value="6">6 - Very much like me</option>
                </select>
            </div>
        </React.Fragment>
        ))}
        </div>
        </div>
    )
}

export default TiviDropDownOne