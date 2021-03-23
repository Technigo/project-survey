import React, { useState } from 'react'

import { Header } from './Header'
import { TaskRadioOption } from './TaskRadioOption'
import { ReasonRadioOption } from './ReasonRadioOption'

const completedTasks = ['Yes', 'No']
const reasonForTravels = ['Business', 'Personal', 'Other']

const Form = () => {
    const [timeSinceVisit, setTimeSinceVisit] = useState('')
    const [reasonForVisit, setReasonForVisit] = useState('')
    const [completedTask, setCompletedTask] = useState('')
    const [likeAboutApp, setLikeAboutApp] = useState('')
    const [changeAboutApp, setChangeAboutApp] = useState('')
    const [reasonForTravel, setReasonForTravel] = useState()
    const [likeToShare, setLikeToShare] = useState('')
    const [surveyComplete, setSurveyComplete] = useState(false)


    const onTimeSinceVisitChanged = (event) => {
        console.log(`Time since last visit: ${event.target.value}`)
        setTimeSinceVisit(event.target.value)
    }

    const onReasonForVisitChanged = (event) => {
        console.log(`Reason for visit: ${event.target.value}`)
        setReasonForVisit(event.target.value)
    }

    const onLikeAboutAppChanged = (event) => {
        console.log(`Like about app: ${event.target.value}`)
        setLikeAboutApp(event.target.value)
    }

    const onChangeAboutAppChanged = (event) => {
        console.log(`Change about app: ${event.target.value}`)
        setChangeAboutApp(event.target.value)
    }

    const onLikeToShareChanged = (event) => {
        console.log(`Share about app: ${event.target.value}`)
        setLikeToShare(event.target.value)
    }

    const isSurveyComplete = () => {
        if (timeSinceVisit === '') {
          return false
        }
    
        if (reasonForVisit === '') {
          return false
        }
    
        if (completedTask === '') {
          return false
        }

        if (likeAboutApp === '') {
            return false
        }

        if (changeAboutApp === '') {
            return false
        }

        if (reasonForTravel === '') {
            return false
        }

        if (likeToShare === '') {
            return false
        }
    
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        
        if (isSurveyComplete()) {
            setSurveyComplete(true)
            console.log(`Survey Complete!`)
        } else {
            alert('Please answer all the questions')
        }
    }

    if (surveyComplete) {
    
        return (
            <main>
                <article className="survey-page">
                    <header className="survey-page-header">
                    <h1 className="survey-title">Survey Summary</h1>
                    </header>
                    <p className="question">1. When was the last time you visited an airline website or app?</p>
                    <p className="answer">Your answer: {timeSinceVisit}</p>
                    <p className="question">2.  Why did you visit the airline website or app that day? What were you trying to do?</p>
                    <p className="answer">Your answer: {reasonForVisit}</p>
                    <p className="question">3. Were you able to complete your task that day?</p>
                    <p className="answer">Your answer: {completedTask}</p>
                    <p className="question">4. What did you like about the booking website or app?</p>
                    <p className="answer">Your answer: {likeAboutApp}</p>
                    <p className="question">5. What would you change about that website or app? What improvements would you make? E.g., check prices, book a flight, check-in, etc...  </p>
                    <p className="answer">Your answer: {changeAboutApp}</p>
                    <p className="question">6. Do you typically fly for business, personal reasons, or some other reason?</p>
                    <p className="answer">Your answer: {reasonForTravel}</p>
                    <p className="question">7. What else do you want to share about your booking experience?</p>
                    <p className="answer">Your answer: {likeToShare}</p>
                    <h2 className="end-phrase">Thank You!</h2>
                </article>
            </main>
        )  
    
    } else {
    
    return (
        <main>
            <article className="survey-page">
                <Header headline="Airline Website Online Survey"/>
                <form onSubmit={handleSubmit} className="survey-form">
                    <div>
                        <label htmlFor="visit" className="question">
                        1. When was the last time you visited an airline website or app?   
                            <div className="select-container">
                                <select 
                                id="visit" 
                                className="select-field"
                                value={timeSinceVisit}
                                onChange={onTimeSinceVisitChanged}
                                >
                                    <option value=''>Time since visit:</option>
                                    <option value='Within the last 4 weeks'>Within the last 4 weeks</option>
                                    <option value='More than 4 weeks ago'>More than 4 weeks ago</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <label html="reason" className="question">
                    2.  Why did you visit the airline website or app that day? What were you trying to do? 
                        <input 
                        id="reason"
                        className="input-field"
                        type='text'
                        value={reasonForVisit}
                        onChange={onReasonForVisitChanged}
                        />
                    </label>
                    <label className="question">
                    3. Were you able to complete your task that day?  
                        <div className="radio-buttons">
                            <div className="buttons">
                            {completedTasks.map((completedTask) => {
                            return ( 
                                <TaskRadioOption completedTaskName={completedTask} setCompletedTask={setCompletedTask}/>
                            )
                            })}
                            </div>
                        </div>
                    </label>
                    <label className="question">
                    4.  What did you like about the booking website or app?
                        <input
                        id="like"
                        className="input-field"
                        type='text'
                        value={likeAboutApp}
                        onChange={onLikeAboutAppChanged}
                        />
                    </label>
                    <label className="question">
                    5. What would you change about that website or app? What improvements would you make? E.g., check prices, book a flight, check-in, etc...  
                        <input 
                        id="change"
                        className="input-field"
                        type='text'
                        value={changeAboutApp}
                        onChange={onChangeAboutAppChanged}
                        />
                    </label>
                    <label className="question">
                    6. Do you typically fly for business, personal reasons, or some other reason?
                        <div className="radio-buttons">
                            <div className="buttons">
                            {reasonForTravels.map((reasonForTravel) => {
                            return ( 
                                <ReasonRadioOption reasonForTravelName={reasonForTravel} setReasonForTravel={setReasonForTravel}/>
                            )
                            })}
                            </div>
                        </div>
                    </label>
                    <label className="question">
                    7. What else do you want to share about your booking experience? 
                        <input
                        id="share"
                        className="input-field"
                        type='text'
                        value={likeToShare}
                        onChange={onLikeToShareChanged}
                        />
                    </label>
                    <input className="submit-button" type="submit" value="Submit"/>
                </form>
            </article>
        </main>
    )
}
}

export default Form