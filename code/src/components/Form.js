import React, { useState } from 'react'

import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import Summary from './Summary'
import ButtonNext from './ButtonNext'
import ButtonBack from './ButtonBack'

const flowers = ['roses', 'tulips', 'orchids']

const Form = () => {
 
    const [name, setName] = useState('');
    const [size, setSize] = useState('')
    const [flower, setFlower] = useState('')
    const [questionIndex, setQuestionIndex] = useState(0)



    // const onBackIndexChange = () => {
    //     setQuestionIndex(questionIndex -1)
    // }


    console.log(size, size, size)
    console.log(name, name, name)
    console.log(flower, flower, flower)
    console.log(questionIndex)

    return (
        <>
            <form onSubmit={event => event.preventDefault()}>
                
                {/* INTRO SECTION */}
                {questionIndex === 0 && 
                    <>
                        <section aria-label="Intro page" className='intro-page'>
                            <Intro/> 
                            <ButtonNext
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>
                    </>
                }

                {/* NAME SECTION */}
                {questionIndex === 1 && 
                    <>
                        <section aria-label="Name input page" className='name-page'>
                                <h2 tabIndex="0">Who do you want to deliver flowers for</h2>
                                <p tabIndex="0">Type their name</p>
                        
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
                        </section>

                    </>
                }

                {/* SIZE SECTION */}
                {questionIndex === 2 && 
                    <>
                        <section aria-label="Size option page" className='size-page'>
                            <h2 tabIndex="0">How big bouquet do you want to send?</h2>
                            <p tabIndex="0">Please choose below</p>            
                        
                            <QuestionTwo
                                size={size}
                                setSize={setSize}    
                            />

                            <ButtonBack
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />

                            <ButtonNext
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>
                    </>
                }

                {/* FLOWER SECTION */}
                {questionIndex === 3 && 
                    <>
                        <section aria-label="Flower option page" className='flower-page'>
                            <h2 tabIndex="0">What flowers do you want to send?</h2>
                            <p tabIndex="0">Please choose an option</p>   

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
                        </section>         
                    </>
                }

                {/* SUMMARY SECTION */}
                {questionIndex > 3 && 
                    <>
                        <section aria-label="Summary page" className='summary-page'>
                            <Summary 
                                name={name} 
                                size={size}
                                flower={flower}
                            />

                            <ButtonBack
                                questionIndex={questionIndex}
                                setQuestionIndex={setQuestionIndex}
                            />
                        </section>
                    </>
                }
               
            </form>
        </>
    )
}

export default Form;