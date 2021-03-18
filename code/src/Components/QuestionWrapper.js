import React from 'react'
import Text from './Text'
import OptionsWrapper from './OptionsWrapper'

const QuestionWrapper = (props) => {

    return (
        <div className="question">
            <Text text={props.question.text}/>
            <OptionsWrapper 
                question={props.question}
                toChange={props.toChange}
            />
        </div>
    )
    
}

export default QuestionWrapper;
