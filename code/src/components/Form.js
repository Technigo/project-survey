import React, { useState } from 'react'

import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
// import RadioOption from './RadioOption'
import Summary from './Summary'

const flowers = ['rose', 'tulip', 'orchid']

const Form = () => {
 
    const [name, setName] = useState('');
    const [food, setFood] = useState('')
    const [flower, setFlower] = useState('')

    // const [newQuestion, setNewQuestion] = useState(0)

    // const onQuestionChange = () => {
    //     console.log(newQuestion)
    //     setNewQuestion(newQuestion +1)
    // }

    console.log(food, food, food)
    console.log(name, name, name)
    console.log(flower, flower, flower)

    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                
                {/* ternery operator */}

                <Intro/>

                <QuestionOne
                    name={name}
                    setName={setName}
                />
                <QuestionTwo
                    food={food}
                    setFood={setFood}    
                    />

                 {/* <QuestionThree
                    flower={flower}
                    setFlower={setFlower}
                    /> */}
                <div>
                    {flowers.map((item) => {
                        return (
                            <QuestionThree
                                flower={flower}
                                setFlower={setFlower}
                                item={item}
                            />
                        )
                    })}

                </div>

                 <Summary 
                    name={name} 
                    food={food}
                    flower={flower}
                    />
               
                 <button
                    type="button" 
                    // onClick={onQuestionChange}
                >
                    Next
                </button>


                {/* {newQuestion > 0 && <Form/>} */}

                
            </form>


        </>
    )
}

export default Form;