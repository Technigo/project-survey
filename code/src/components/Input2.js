import React from 'react'

const optionsQuestionTwo = ['','June', 'July', 'August']

export const Input2 = ({setMonth, month}) => {
  
  const onMonthChange =(event) => {
    setMonth(event.target.value)
  }

  return (
    <div>
      <div>
        <h3>
          Best summer month 🌸
        </h3>
      </div>
      <label>
        Make your pick:       
        <select 
          type="select"
          onChange={onMonthChange}
          value={month}
          aria-label='Select your favourite summer month'
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
      </label> 
      
    </div>
  )
}