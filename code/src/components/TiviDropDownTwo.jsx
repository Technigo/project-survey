import React from 'react'

let capital = 'They'
let lower = 'they'
let lower2 = 'their'
let lower3 = 'them'
let s = ''
let are = 'are'
let tries = 'try'
let does = 'do'
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
        does = 'does'
        has = 'has'
    } if (props.gender === 'Male') {
        capital = 'He'
        lower = 'he'
        lower2 = 'his'
        lower3 = 'him'
        are = 'is'
        tries = 'tries'
        s = 's'
        does = 'does'
        has = 'has'
    } if (props.gender === 'Neither') {
        capital = 'They'
        lower = 'they'
        lower2 = 'their'
        lower3 = 'them'
        are = 'are'
        s = ''
    }

    return (
        <>
        <h2>Values Inventory part 2</h2>
        <h3>Here we briefly describe some people. Please read each description and think about how much each person is or is not like you. Using a 6-point scale from “not like me at all” to “very much like me,” choose how similar the person is to you. </h3>
        <div className="grid">

        <div className="column-1">
            <label htmlFor="tivi11">It is important to {lower3} to always behave properly. {capital} want{s} to avoid doing anything people would say is wrong.</label>
            </div>
            <div className="column-2">
            <select id="tivi11" name="tivi11" onChange={event => props.q11Question(event.target.value)} value={props.q11Answer} required>
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
            <label htmlFor="tivi12">{capital} think{s} it is best to do things in traditional ways. It is important to {lower3} to keep up the customs {lower} {has} learned.</label>
            </div>
            <div className="column-2">
            <select id="tivi12" name="tivi12" onChange={event => props.q12Question(event.target.value)} value={props.q12Answer} required>
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
            <label htmlFor="tivi13">It is important to {lower3} to respond to the needs of others. {capital} {tries} to support those {lower} know{s}.</label>
            </div>
            <div className="column-2">
            <select id="tivi13" name="tivi13" onChange={event => props.q13Question(event.target.value)} value={props.q13Answer} required>
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
            <label htmlFor="tivi14">{capital} believe{s} all the worlds' people should live in harmony. Promoting peace among all groups in the world is important to {lower3}.</label>
            </div>
            <div className="column-2">
            <select id="tivi14" name="tivi14" onChange={event => props.q14Question(event.target.value)} value={props.q14Answer} required>
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
            <label htmlFor="tivi15">Thinking up new ideas and being creative is important to {lower3}. {capital} like{s} to do things in {lower2} own original way.</label>
            </div>
            <div className="column-2">
            <select id="tivi15" name="tivi15" onChange={event => props.q15Question(event.target.value)} value={props.q15Answer} required>
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
            <label htmlFor="tivi16">{capital} think{s} it is important to do lots of different things in life. {capital} alway{s} looks for new things to try.</label>
            </div>
            <div className="column-2">
            <select id="tivi16" name="tivi16" onChange={event => props.q16Question(event.target.value)} value={props.q16Answer} required>
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
            <label htmlFor="tivi17">{capital} really want{s} to enjoy life. Having a good time is very important to {lower3}.</label>
            </div>
            <div className="column-2">
            <select id="tivi17" name="tivi17" onChange={event => props.q17Question(event.target.value)} value={props.q17Answer} required>
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
            <label htmlFor="tivi18">Being very successful is important to {lower3}. {capital} like{s} to impress other people.</label>
            </div>
            <div className="column-2">
            <select id="tivi18" name="tivi18" onChange={event => props.q18Question(event.target.value)} value={props.q18Answer} required>
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
            <label htmlFor="tivi19">It is important to {lower3} to be in charge and tell others what to do. {capital} want{s} people to do what {lower} say{s}.</label>
            </div>
            <div className="column-2">
            <select id="tivi19" name="tivi19" onChange={event => props.q19Question(event.target.value)} value={props.q19Answer} required>
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
            <label htmlFor="tivi20">Having a stable government is important to {lower3}. {capital} {are} concerned that the social order be protected.</label>
            </div>
            <div className="column-2">
            <select id="tivi20" name="tivi20" onChange={event => props.q20Question(event.target.value)} value={props.q20Answer} required>
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
        </>
    )
} 

export default TiviDropDownTwo