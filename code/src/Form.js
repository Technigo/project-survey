import React from 'react'
import {useState} from 'react'
import WelcomeSection from './WelcomeSection'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Summary from './Summary'



const Form = () => {
    
     
    const [section, setSection] = useState('welcomeSection')
    const [activityLevel, setActivityLevel] = useState('')
    const [livingspace, setLivingspace] = useState('')
    const [furType, setFurType] = useState('')
    const [submit, setSubmit] = useState(false)



  return (
    <>
    
    {submit === false ? ( <form className='main-form' onSubmit={(e) => { e.preventDefault(); setSubmit(true) }} >

        {section === 'welcomeSection' && (
            <WelcomeSection 
            section={section}
            setSection={setSection}/>
        )}
        
        {section === 'firstQuestion' && (
            <>
                <Question1 
                activityLevel={activityLevel}
                setActivityLevel={setActivityLevel}
                section={section}
                setSection={setSection}
                />
            </>
        )}
        {section === 'secondQuestion' && (
            <div>
                <Question2
                livingspace={livingspace}
                setLivingspace={setLivingspace}
                section={section}
                setSection={setSection} 
                />
            </div>
        )}
        {section === 'thirdQuestion' && (
            <div>
                <Question3 
                furType={furType} 
                setFurType={setFurType}
                />
            </div>
        )}
    </form>
    ) :(
        <section>
            <Summary 
            activityLevel={activityLevel}
            livingspace={livingspace}
            furType={furType}
            section={section}
            setSection={setSection}
            />
        </section>
    
    )}
    </>
  
)}

export default Form