import React, { useState } from 'react'

const optionsQuestionTwo = ['','June', 'July', 'August']

export const Input2 = ({setMonth, month}) => {
  
  const onMonthChange =(event) => {
    setMonth(event.target.value)
  }

  return (
    <div>
      <div>
        <h3>
          Best summer month
        </h3>
      </div>       
      <select 
        type="select"
        onChange={(event) => {onMonthChange(event)}}
        value={month}
      >
      
        {optionsQuestionTwo.map((month) => {
          return (
            <option 
              key={month}
              value={month}
            >
               {month}
            </option>
          )
        })
      }
      </select>
    </div>
  )
}

//return first option with disabled