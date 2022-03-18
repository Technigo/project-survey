import React from 'react'
import Firstquestion from './Firstquestion'
import Fourthquestion from './Fourthquestion'
import Secondquestion from './Secondquestion'
import Thirdquestion from './Thirdquestion'

const Questions = (props) => {

  if(props.count === 1){
     return <Firstquestion name={props.name} setName = {props.setName}/>
  }else if(props.count === 2){
    return <Secondquestion personNumber={props.personNumber} setPersonNumber = {props.setPersonNumber}/>
  }else if(props.count === 3){
    return <Thirdquestion ageGroup = {props.ageGroup} setAgeGroup = {props.setAgeGroup}/>
  }else if(props.count === 4){
    return <Fourthquestion email = {props.email} setEmail = {props.setEmail}/>
  }
}

export default Questions