import React, { useState } from 'react'
import Summary from './Summary'

import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
// import QuestionThree from './QuestionThree'

const Form = () => {
 
    const [name, setName] = useState('');
    const [food, setFood] = useState('')
    // const [flower, setFlower] = useState('')

    // const [SubmitResult, setSubmitResult] = useState(0)

    // const onSubmit = (event) => {
    //     console.log(name, food)
    //     setSubmitResult(SubmitResult +1)
    // }

    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                <QuestionOne
                    name={name}
                    setName={setName}
                />
                {/* <QuestionTwo
                    food={food}
                    setFood={setFood}    
                    /> */}
                {/* <QuestionThree/> */}
               
                {/* <button 
                    type="submit"
                    onClick={onSubmit}
                >
                    Submit answers!
                </button> */}

                {/* <h3>Your answers: Your name: {name}. You're favorite food: {food}</h3> */}
               
                {/* {SubmitResult > 0 && <Summary/>} */}

                
            </form>


        </>
    )
}

export default Form;