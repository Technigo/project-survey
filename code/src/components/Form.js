import React, { useState } from 'react'

import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import Summary from './Summary'

const flowers = ['rose', 'tulip', 'orchid']

const Form = () => {
 
    const [name, setName] = useState('');
    const [food, setFood] = useState('')
    const [flower, setFlower] = useState('')
    const [questionIndex, setQuestionIndex] = useState(0)

    const onQuestionIndexChange = () => {
        console.log(questionIndex)
        setQuestionIndex(questionIndex +1)
    }

    console.log(food, food, food)
    console.log(name, name, name)
    console.log(flower, flower, flower)
    console.log(questionIndex)

    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                
                {questionIndex === 0 && 
                    <Intro/> 
                }

                {questionIndex === 1 && 
                    <QuestionOne 
                        name={name}
                        setName={setName}
                    /> 
                }

                {questionIndex === 2 && 
                    <QuestionTwo
                        food={food}
                        setFood={setFood}    
                    />
                }

                {questionIndex === 3 && 
                    <>
                        {flowers.map((item) => {
                            return (
                                <QuestionThree
                                    flower={flower}
                                    setFlower={setFlower}
                                    item={item}
                                />
                             )
                        })}
                    
                    </>
                }

                {questionIndex > 3 && 
                    <Summary 
                        name={name} 
                        food={food}
                        flower={flower}
                    />
                }
               
                <button 
                    type="button"
                    onClick={onQuestionIndexChange}>
                    Next
                </button>
                
            </form>
        </>
    )
}

export default Form;