import React from 'react'
import Text from './Text'
import OptionsWrapper from './OptionsWrapper'

const QuestionWrapper = (props) => {

    return (
        <div className="question">
            <Text 
                question={props.question}
            />
            <OptionsWrapper 
                question={props.question}
                toChange={props.toChange}
                skillLevel={props.skillLevel}
                otherSkillLevel_a = {props.otherSkillLevel_a}
                otherSkillLevel_b = {props.otherSkillLevel_b}
                options={props.options}
                source={props.source}
            />
        </div>
    )
    
}

export default QuestionWrapper;
