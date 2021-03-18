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

                //these are redundant unless the question is a dropdown, unfortunately
                bestAt = {bestAt}
                onBestAtChange = {onBestAtChange}
                nextToBestAt = {nextToBestAt}
                onNextToBestAtChange = {onNextToBestAtChange}
                worstAt = {worstAt}
                onWorstAtChange = {onWorstAtChange}
            />
        </div>
    )
    
}

export default QuestionWrapper;
