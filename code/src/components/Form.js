import React, { useState } from 'react'

import Image from './Image'
import FirstPage from './FirstPage'
import Button from './Button'
import ActivitySelect from './ActivitySelect'
import LessonRadioOption from './LessonRadioOption'
import Reminder from './Reminder'
import FormSummary from './FormSummary'

const Form = () => {

    const [word, setWord] = useState('')
    const [firstActivity, setFirstActivity] = useState('')
    const [lesson, setLesson] = useState('')
    const [reminder, setReminder] = useState('')
    const [questionIndex, setQuestionIndex] = useState(0)

    const restart = () => {
        document.location.href=''
    }

    const questionHandler = (event) => {
        event.preventDefault()
        if (word === '') {
            setQuestionIndex(0)
        } else if (firstActivity === '') {
            setQuestionIndex (1)
        } else if (lesson === '') {
            setQuestionIndex(2)
        } else if (reminder === '') {
            setQuestionIndex(3)
        } else if (questionIndex === 3) {
            setQuestionIndex(4)
        } else {
            restart()
        }
    }

    return (
        <form onSubmit={questionHandler}>
            <Image />
            {questionIndex === 0 &&   
                <>
                    <FirstPage 
                        word={word}
                        setWord={setWord}
                    />
                    <Button text="Start" labelText="Start survey" />  
                </>
            }
            {questionIndex === 1 &&
                <>
                    <ActivitySelect
                        firstActivity={firstActivity}
                        setFirstActivity={setFirstActivity}
                    />
                    <Button text="Next" labelText="Next question" />
                </>
            }
            {questionIndex === 2 &&
                <>
                    <LessonRadioOption
                        setLesson={setLesson}
                        reminder={reminder}
                        setReminder={setReminder}
                    />
                    <Button text="Next" labelText="Next question" />
                </>
            }
            {questionIndex === 3 &&
                <>
                    <Reminder
                        reminder={reminder}
                        setReminder={setReminder}
                    />
                    <Button text="Submit" labelText="Submit survey" />
                </>
            }
            {questionIndex === 4 &&
                <>
                    <FormSummary
                        word={word}
                        firstActivity={firstActivity}
                        lesson={lesson}
                        reminder={reminder}
                    />
                    <Button text="Restart" labelText="Restart survey" restartButton="restart" />
                </>
            } 
        </form>              
    )         
}

export default Form 

   