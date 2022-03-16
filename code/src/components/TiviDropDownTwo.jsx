import React from 'react'

let capital = 'They'
let lower = 'they'
let lower2 = 'their'
let lower3 = 'them'
let s = ''
let are = 'are'
let tries = 'try'
// let does = 'do'
let has = 'have'

let TiviDropDownTwo = (props) => {

    if (props.gender === 'Female') {
        capital = 'She'
        lower = 'she'
        lower2 = 'her'
        lower3 = 'her'
        are = 'is'
        tries = 'tries'
        s = 's'
        // does = 'does'
        has = 'has'
    } if (props.gender === 'Male') {
        capital = 'He'
        lower = 'he'
        lower2 = 'his'
        lower3 = 'him'
        are = 'is'
        tries = 'tries'
        s = 's'
        // does = 'does'
        has = 'has'
    } if (props.gender === 'Neither') {
        capital = 'They'
        lower = 'they'
        lower2 = 'their'
        lower3 = 'them'
        are = 'are'
        s = ''
    }

    const tiviTwoArray = [
        {
            id: 'tivi11',
            text: `It is important to ${lower3} to always behave properly. ${capital} want${s} to avoid doing anything people would say is wrong.`,
            onChange: event => props.q11Question(event.target.value),
            value: props.q11Answer
        },
        {
            id: 'tivi12',
            text: `${capital} think${s} it is best to do things in traditional ways. It is important to ${lower3} to keep up the customs ${lower} ${has} learned.`,
            onChange: event => props.q12Question(event.target.value),
            value: props.q12Answer
        },
        {
            id: 'tivi13',
            text: `It is important to ${lower3} to respond to the needs of others. ${capital} ${tries} to support those ${lower} know${s}.`,
            onChange: event => props.q13Question(event.target.value),
            value: props.q13Answer
        },
        {
            id: 'tivi14',
            text: `${capital} believe${s} all the worlds' people should live in harmony. Promoting peace among all groups in the world is important to ${lower3}.`,
            onChange: event => props.q14Question(event.target.value),
            value: props.q14Answer
        },
        {
            id: 'tivi15',
            text: `Thinking up new ideas and being creative is important to ${lower3}. ${capital} like${s} to do things in ${lower2} own original way.`,
            onChange: event => props.q15Question(event.target.value),
            value: props.q15Answer
        },
        {
            id: 'tivi16',
            text: `${capital} think${s} it is important to do lots of different things in life. ${capital} alway${s} looks for new things to try.`,
            onChange: event => props.q16Question(event.target.value),
            value: props.q16Answer
        },
        {
            id: 'tivi17',
            text: `${capital} really want${s} to enjoy life. Having a good time is very important to ${lower3}`,
            onChange: event => props.q17Question(event.target.value),
            value: props.q17Answer
        },
        {
            id: 'tivi18',
            text: `Being very successful is important to ${lower3}. ${capital} like${s} to impress other people.`,
            onChange: event => props.q18Question(event.target.value),
            value: props.q18Answer
        },
        {
            id: 'tivi19',
            text: `It is important to ${lower3} to be in charge and tell others what to do. ${capital} want${s} people to do what ${lower} say${s}.`,
            onChange: event => props.q19Question(event.target.value),
            value: props.q19Answer
        },
        {
            id: 'tivi20',
            text: `Having a stable government is important to ${lower3}. ${capital} ${are} concerned that the social order be protected.`,
            onChange: event => props.q20Question(event.target.value),
            value: props.q20Answer
        },
    ]

    return (
        <div className="page-container">
        <h2>Values Inventory (part 2)</h2>
        <p>Here we briefly describe some people. Please read each description and think about how much each person is or is not like you. Using a 6-point scale from “not like me at all” to “very much like me,” choose how similar the person is to you. </p>
        <div className="grid" type="form">

        {tiviTwoArray.map(({ text, id, onChange, value }) => (
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

export default TiviDropDownTwo