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

let TiviDropDownTwo = ({q11Answer, q12Answer, q13Answer, q14Answer, q15Answer, q16Answer, q17Answer, q18Answer, q19Answer, q20Answer, q11Question, q12Question, q13Question, q14Question, q15Question, q16Question, q17Question, q18Question, q19Question, q20Question, gender, error}) => {

    if (gender === 'Female') {
        capital = 'She'
        lower = 'she'
        lower2 = 'her'
        lower3 = 'her'
        are = 'is'
        tries = 'tries'
        s = 's'
        // does = 'does'
        has = 'has'
    } if (gender === 'Male') {
        capital = 'He'
        lower = 'he'
        lower2 = 'his'
        lower3 = 'him'
        are = 'is'
        tries = 'tries'
        s = 's'
        // does = 'does'
        has = 'has'
    } if (gender === 'Neither') {
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
            onChange: event => q11Question(Number(event.target.value)),
            value: q11Answer
        },
        {
            id: 'tivi12',
            text: `${capital} think${s} it is best to do things in traditional ways. It is important to ${lower3} to keep up the customs ${lower} ${has} learned.`,
            onChange: event => q12Question(Number(event.target.value)),
            value: q12Answer
        },
        {
            id: 'tivi13',
            text: `It is important to ${lower3} to respond to the needs of others. ${capital} ${tries} to support those ${lower} know${s}.`,
            onChange: event => q13Question(Number(event.target.value)),
            value: q13Answer
        },
        {
            id: 'tivi14',
            text: `${capital} believe${s} all the worlds' people should live in harmony. Promoting peace among all groups in the world is important to ${lower3}.`,
            onChange: event => q14Question(Number(event.target.value)),
            value: q14Answer
        },
        {
            id: 'tivi15',
            text: `Thinking up new ideas and being creative is important to ${lower3}. ${capital} like${s} to do things in ${lower2} own original way.`,
            onChange: event => q15Question(Number(event.target.value)),
            value: q15Answer
        },
        {
            id: 'tivi16',
            text: `${capital} think${s} it is important to do lots of different things in life. ${capital} alway${s} looks for new things to try.`,
            onChange: event => q16Question(Number(event.target.value)),
            value: q16Answer
        },
        {
            id: 'tivi17',
            text: `${capital} really want${s} to enjoy life. Having a good time is very important to ${lower3}`,
            onChange: event => q17Question(Number(event.target.value)),
            value: q17Answer
        },
        {
            id: 'tivi18',
            text: `Being very successful is important to ${lower3}. ${capital} like${s} to impress other people.`,
            onChange: event => q18Question(Number(event.target.value)),
            value: q18Answer
        },
        {
            id: 'tivi19',
            text: `It is important to ${lower3} to be in charge and tell others what to do. ${capital} want${s} people to do what ${lower} say${s}.`,
            onChange: event => q19Question(Number(event.target.value)),
            value: q19Answer
        },
        {
            id: 'tivi20',
            text: `Having a stable government is important to ${lower3}. ${capital} ${are} concerned that the social order be protected.`,
            onChange: event => q20Question(Number(event.target.value)),
            value: q20Answer
        },
    ]

    return (
        <div className="page-container">
        <h2 className="title">Values Inventory (part 2)</h2>
        <p className="explanation">Here we briefly describe some people. Please read each description and think about how much each person is or is not like you. Using a 6-point scale from “not like me at all” to “very much like me,” choose how similar the person is to you. </p>
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
        {error !== 'noError' && <p className="error-message">{error}</p>}
        </div>
    )
} 

export default TiviDropDownTwo