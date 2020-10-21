import React from 'react'
import { Header } from 'components/Header'
import { FirstQuestion } from './components/FirstQuestion'
import { SecondQuestion } from './components/SecondQuestion'
import { ThirdQuestion } from './components/ThirdQuestion'
import { SubmitButton } from './components/SubmitButton'
import { Summary } from './components/Summary'
import { useState } from 'react'



export const Form = () => {
    const [ageGroup, setAgeGroup] = useState('');
    const [location, setLocation] = useState('');
    const [text, setText] = useState()


    return (
        <>
        <Header />
        <FirstQuestion 
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        />
        <SecondQuestion
        location={location}
        setLocation={setLocation} 
        />
        <ThirdQuestion
        text={text}
        setText={setText}
         />
        <SubmitButton />
        <Summary />
        </>
    )
}