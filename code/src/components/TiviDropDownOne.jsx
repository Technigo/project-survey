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
    // console.log(props)

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

    return (
        <div className="page-container">
        <h2>Values Inventory (part 1)</h2>
        <p>Here we briefly describe some people. Please read each description and think about how much each person is or is not like you. Using a 6-point scale from “not like me at all” to “very much like me,” choose how similar the person is to you. </p>
        <div className="grid">

            <div className="column-1">
            <label htmlFor="tivi1">{capital} believe{s} {lower} should always show respect to {lower2} parents and to older people. It is important to {lower3} to be obedient.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi1" name="tivi1" onChange={event => props.q1Question(event.target.value)} value={props.q1Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi2">Religious belief is important to {lower3}. {capital} {tries} hard to do what {lower2} religion requires.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi2" name="tivi2" onChange={event => props.q2Question(event.target.value)} value={props.q2Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi3">It's very important to {lower3} to help the people around {lower3}. {capital} want{s} to care for their well-being.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi3" name="tivi3" onChange={event => props.q3Question(event.target.value)} value={props.q3Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi4">{capital} think{s} it is important that every person in the world be treated equally. {capital} believe{s} everyone should have equal opportunities in life.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi4" name="tivi4" onChange={event => props.q4Question(event.target.value)} value={props.q4Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi5">{capital} think{s} it's important to be interested in things. {capital} like{s} to be curious and to try to understand all sorts of things.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi5" name="tivi5" onChange={event => props.q5Question(event.target.value)} value={props.q5Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi6">{capital} like{s} to take risks. {capital} {are} always looking for adventures.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi6" name="tivi6" onChange={event => props.q6Question(event.target.value)} value={props.q6Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi7">{capital} seek{s} every chance {lower} can to have fun. It is important to {lower3} to do things that give {lower3} pleasure.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi7" name="tivi7" onChange={event => props.q7Question(event.target.value)} value={props.q7Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi8">Getting ahead in life is important to {lower3}. {capital} strive{s} to do better than others.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi8" name="tivi8" onChange={event => props.q8Question(event.target.value)} value={props.q8Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi9">{capital} always wants to be the one who makes the decisions. {capital} like{s} to be the leader.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi9" name="tivi9" onChange={event => props.q9Question(event.target.value)} value={props.q9Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

            <div className="column-1">
            <label htmlFor="tivi10">It is important to {lower3} that things be organized and clean. {capital} really {does} not like things to be a mess.</label>
            </div>
            <div className="column-2 drop-down">
            <select id="tivi10" name="tivi10" onChange={event => props.q10Question(event.target.value)} value={props.q10Answer} required>
                <option value="default" disabled hidden>Select option:</option>
                <option value="1">1 - Not like me at all</option>
                <option value="2">2 - Not like me</option>
                <option value="3">3 - A little like me</option>
                <option value="4">4 - Somewhat like me</option>
                <option value="5">5 - Like me</option>
                <option value="6">6 - Very much like me</option>
            </select>
            </div>

        </div>
        </div>
    )
}

export default TiviDropDownOne