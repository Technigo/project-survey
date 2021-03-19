import React, { useState } from 'react'

import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import Summary from './Summary'
import ButtonNext from './ButtonNext'
import ButtonBack from './ButtonBack'
import RadioOption from './RadioOption'

const flowers = ['rose', 'tulip', 'orchid']

const Form = () => {
 
    const [name, setName] = useState('');
    const [food, setFood] = useState('')
    const [flower, setFlower] = useState('')
    const [questionIndex, setQuestionIndex] = useState(0)



    // const onBackIndexChange = () => {
    //     setQuestionIndex(questionIndex -1)
    // }


    console.log(food, food, food)
    console.log(name, name, name)
    console.log(flower, flower, flower)
    console.log(questionIndex)

    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                
                {questionIndex === 0 && 
                    <>
                        <Intro/> 

                        <ButtonNext
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                />

                    </>
                }

                {questionIndex === 1 && 
                    <>

                        <h2>First Question</h2>
                        <p>What's your name?</p>
                        
                        <QuestionOne 
                            name={name}
                            setName={setName}
                        /> 

                        <ButtonBack
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />

                        <ButtonNext
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />

                    </>
                }

                {questionIndex === 2 && 
                    <>
                        <h2>Second Question</h2>
                        <p>What's your favorite food</p>            
                        
                        <QuestionTwo
                            food={food}
                            setFood={setFood}    
                        />

                        <ButtonBack
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />

                        <ButtonNext
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />

                    </>
                }

                {questionIndex === 3 && 
                    <>
                        <h2>Third Question</h2>
                        <p>What's your favorite flower?</p>   

                        {flowers.map((item) => {
                            return (
                                <QuestionThree
                                    flower={flower}
                                    setFlower={setFlower}
                                    item={item}
                                />
                             )
                        })}
                    
                        <ButtonBack
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />

                        <ButtonNext
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />          
                    </>
                }

                {questionIndex > 3 && 
                    <>
                        <Summary 
                            name={name} 
                            food={food}
                            flower={flower}
                        />

                        <ButtonBack
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />
                    </>
                }
               


                
{/* 
                <button 
                    type="button"
                    onClick={onQuestionIndexChange}>
                    Next
                </button>

                <button 
                    type="button"
                    onClick={onBackIndexChange}>
                    Back
                </button> */}
                
            </form>
        </>
    )
}

export default Form;