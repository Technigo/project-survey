import React from 'react'
import Text from './Text'
import OptionsWrapper from './OptionsWrapper'

const QuestionWrapper = (props) => {
    return (
        <div>
            <Text text={props.question}/>
            <OptionsWrapper question={props.question}/>
        </div>
    )
}

export default QuestionWrapper;
